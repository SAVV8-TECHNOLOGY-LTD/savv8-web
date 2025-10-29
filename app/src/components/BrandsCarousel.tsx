import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useBrandsForCarousel, useBrandStats } from "@/hooks/useDataSource";

const BrandsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Use data source hooks
  const { data: brandsResponse, isLoading: brandsLoading, error: brandsError } = useBrandsForCarousel();
  const { data: statsResponse, isLoading: statsLoading } = useBrandStats();
  
  const brands = brandsResponse?.data || [];
  const stats = statsResponse?.data;

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 5;
    const width = window.innerWidth;
    if (width < 640) return 1; // mobile: 1 item
    if (width < 768) return 2; // sm: 2 items  
    if (width < 1024) return 3; // md: 3 items
    if (width < 1280) return 4; // lg: 4 items
    return 5; // xl: 5 items
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);

  // Update items per view on resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || brands.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= Math.max(0, brands.length - itemsPerView) ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, brands.length, itemsPerView]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= Math.max(0, brands.length - itemsPerView) ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? Math.max(0, brands.length - itemsPerView) : prevIndex - 1
    );
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (brandsError) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Unable to load partner brands at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Partners</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Brands We Work With
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            We've partnered with leading brands across various industries to bring you exclusive savings and personalized offers.
          </p>
        </div>

        {brandsLoading ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {Array.from({ length: itemsPerView }).map((_, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Skeleton className="h-12 w-full mb-4" />
                    <Skeleton className="h-4 w-3/4 mx-auto mb-2" />
                    <Skeleton className="h-3 w-1/2 mx-auto mb-2" />
                    <Skeleton className="h-3 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div 
            className="relative overflow-hidden animate-fade-in-up"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Carousel Container */}
            <div 
              className="flex gap-3 sm:gap-4 lg:gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {brands.map((brand) => (
                <Card 
                  key={brand.id}
                  className={`flex-shrink-0 border-border hover:shadow-lg transition-all duration-300 group cursor-pointer ${
                    itemsPerView === 1 ? 'w-full' :
                    itemsPerView === 2 ? 'w-1/2' :
                    itemsPerView === 3 ? 'w-1/3' :
                    itemsPerView === 4 ? 'w-1/4' : 'w-1/5'
                  }`}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-background rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="w-full h-8 sm:h-12 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2 group-hover:text-accent transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {brand.category}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {brand.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            {brands.length > itemsPerView && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10 h-8 w-8 sm:h-10 sm:w-10 p-0"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background z-10 h-8 w-8 sm:h-10 sm:w-10 p-0"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </>
            )}
          </div>
        )}

        {/* Indicators */}
        {brands.length > itemsPerView && (
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: Math.max(0, brands.length - itemsPerView + 1) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {statsLoading ? (
            <>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-6 sm:h-8 w-12 sm:w-16 mx-auto mb-2" />
                  <Skeleton className="h-3 sm:h-4 w-16 sm:w-20 mx-auto" />
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">{stats?.totalBrands || 0}+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Partner Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">{stats?.categoriesCount || 0}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">1M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Available Offers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">AI Monitoring</div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;