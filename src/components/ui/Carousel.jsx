import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ 
  items, 
  autoPlay = false,
  interval = 5000,
  showIndicators = true,
  showNavigation = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-container">
        {showNavigation && (
          <>
            <button 
              className="carousel-button prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="carousel-button next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="carousel-slides">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="carousel-slide"
            >
              {items[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {showIndicators && (
          <div className="carousel-indicators">
            {items.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx="true">{`
        .carousel {
          position: relative;
          width: 100%;
        }

        .carousel-container {
          position: relative;
          overflow: hidden;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 50px;
          height: 50px;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .carousel-button:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-button.prev {
          left: 20px;
        }

        .carousel-button.next {
          right: 20px;
        }

        .carousel-slides {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .carousel-slide {
          width: 100%;
          height: 100%;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border: none;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: var(--primary);
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .carousel-button {
            width: 40px;
            height: 40px;
          }

          .carousel-button.prev {
            left: 10px;
          }

          .carousel-button.next {
            right: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;