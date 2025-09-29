import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, ShoppingCart, Wrench } from "lucide-react";
import Image from "next/image";
import config from "../next.config";

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "تنظيف الألواح بالروبوتات",
      description:
        "خدمة تنظيف احترافية باستخدام روبوتات ذكية مجهزة بأحدث التقنيات لضمان تنظيف شامل وآمن دون خدش الألواح",
      image: "/robot-cleaning-solar-panels-on-rooftop.jpg",
      features: [
        "تنظيف آلي بالكامل",
        "آمن على الألواح",
        "كفاءة عالية",
        "توفير في الوقت والتكلفة",
      ],
    },
    {
      icon: ShoppingCart,
      title: "بيع روبوتات التنظيف",
      description:
        "نوفر أحدث أنواع روبوتات تنظيف الألواح الشمسية للشراء مع ضمان شامل وتدريب كامل على الاستخدام",
      image: "/modern-solar-panel-cleaning-robot-product-showcase.jpg",
      features: [
        "ضمان لمدة سنتين",
        "تدريب مجاني",
        "قطع غيار متوفرة",
        "دعم فني مستمر",
      ],
    },
    {
      icon: Wrench,
      title: "الصيانة والدعم الفني",
      description:
        "خدمات صيانة دورية وطارئة لضمان عمل الأنظمة الشمسية بكفاءة قصوى على مدار العام",
      image: "/technician-maintaining-solar-panel-system.jpg",
      features: ["صيانة دورية", "استجابة سريعة", "فحص شامل", "تقارير مفصلة"],
    },
  ];

  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-foreground text-4xl md:text-5xl">
            خدماتنا
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg text-pretty">
            نقدم مجموعة متكاملة من الخدمات لضمان أفضل أداء لأنظمتكم الشمسية
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl overflow-hidden transition-shadow"
            >
              <div
                className={`grid md:grid-cols-2 gap-8 ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={`p-8 md:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                >
                  <div className="flex justify-center items-center bg-primary/10 mb-6 rounded-full w-16 h-16">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-4 font-bold text-foreground text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="bg-primary rounded-full w-2 h-2" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="w-fit">
                    اعرف المزيد
                  </Button>
                </div>
                <div
                  className={`relative h-[300px] md:h-auto ${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  <Image
                    fill
                    src={`${config.basePath}${
                      service.image || "/placeholder.svg"
                    }`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
