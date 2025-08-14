"use client";

import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin, ArrowRight, Heart } from "lucide-react";

export default function PropertyGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const properties = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      price: "$485,000",
      beds: 3,
      baths: 2,
      sqft: "2,150",
      location: "Location 1",
      status: "New Listing",
      type: "Single Family",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      price: "$625,000",
      beds: 4,
      baths: 3,
      sqft: "2,850",
      location: "Location 2",
      status: "Price Reduced",
      type: "Mediterranean",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600",
      price: "$750,000",
      beds: 4,
      baths: 4,
      sqft: "3,200",
      location: "Location 3",
      status: "Featured",
      type: "Golf Course",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=600",
      price: "$395,000",
      beds: 3,
      baths: 2,
      sqft: "1,950",
      location: "Location 4",
      status: "Just Listed",
      type: "Contemporary",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=600",
      price: "$890,000",
      beds: 5,
      baths: 4,
      sqft: "4,100",
      location: "Location 5",
      status: "Luxury",
      type: "Custom Built",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=400&width=600",
      price: "$525,000",
      beds: 3,
      baths: 3,
      sqft: "2,400",
      location: "Location 6",
      status: "Move-in Ready",
      type: "Ranch Style",
    },
  ];

  {
    /* do research look here on the website below
  https://www.woodsidehomes.com/findmyhome/nevada/las-vegas/capella-at-sunstone?keyword=new%20houses%20for%20sale%20near%20me&utm_term=new%20houses%20for%20sale%20near%20me&utm_campaign=Search_WTYNHL_NCOP_Capella_at_Sunstone_NV_070825&utm_source=adwords&utm_medium=ppc&hsa_acc=9397516722&hsa_cam=22767679829&hsa_grp=183042432438&hsa_ad=762656376180&hsa_src=g&hsa_tgt=kwd-296448519824&hsa_kw=new%20houses%20for%20sale%20near%20me&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=22767679829&gbraid=0AAAAADnhHMuc-kO4p4fGWb3cwPJ0B06lp&gclid=CjwKCAjwkvbEBhApEiwAKUz6-77RH4QE1u4yXbp-XQFyKAVa9Ie3Ow41yQCJENjZe9kqQU0UFCLUjhoCvZsQAvD_BwE
  https://www.55places.com/nevada/city/pahrump?utm_source=google&utm_medium=cpc&utm_campaign=18978014577&adgroupid=6457273979&keyword=&creative=&extension=&placement=&matchtype=&device=c&loc_physical_ms=9061341&loc_interest_ms=1022651&network=x&sem_account_id=9083296486&sem_campaign_id=18978014577&sem_ad_group_id=6457273979&sem_device_type=c&sem_ad_id=&sem_network=x&utm_term=&gad_source=1&gad_campaignid=18978015096&gbraid=0AAAAAD35mGOTt4tZSrKbQwv_JQ5WLy_Dv&gclid=CjwKCAjwkvbEBhApEiwAKUz6-529OX-CLYVyKqQbDURga3LJviUqL3aT4nJmSUfp7jRW7MZtmER1URoCzLMQAvD_BwE
*/
  }

  return (
    <section ref={sectionRef} id="listings" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-primary mb-6 transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Featured Properties
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Discover exceptional homes in Pahrump's most desirable
            neighborhoods, from golf course estates to modern family residences.
          </p>
          <div
            className={`w-24 h-1 bg-accent mx-auto mt-6 transition-all duration-1000 delay-300 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={`${property.type} in ${property.location}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Status Badge */}
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {property.status}
                </Badge>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors duration-200 ${
                      favorites.includes(property.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    {property.price}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {property.type}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{property.location}</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 bg-transparent"
                >
                  Schedule Viewing
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Properties CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
          >
            View All Properties
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
