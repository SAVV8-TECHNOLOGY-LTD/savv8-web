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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || brands.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= Math.max(0, brands.length - 5) ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, brands.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= Math.max(0, brands.length - 5) ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? Math.max(0, brands.length - 5) : prevIndex - 1
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Brands We Work With
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've partnered with leading brands across various industries to bring you exclusive savings and personalized offers.
          </p>
        </div>

        {brandsLoading ? (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6 text-center">
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
            <div className="flex gap-6 transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}>
              {brands.map((brand) => (
                <Card 
                  key={brand.id}
                  className="flex-shrink-0 w-1/5 border-border hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 p-4 bg-background rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="w-full h-12 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {brand.category}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {brand.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            {brands.length > 5 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
        )}

        {/* Indicators */}
        {brands.length > 5 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.max(0, brands.length - 4) }).map((_, index) => (
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {statsLoading ? (
            <>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stats?.totalBrands || 0}+</div>
                <div className="text-sm text-muted-foreground">Partner Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stats?.categoriesCount || 0}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Available Offers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;