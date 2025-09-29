import { Card } from "@/components/ui/card";
import { Award, Users, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/30 py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-foreground text-4xl md:text-5xl">
            من نحن
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg text-pretty">
            شركة رائدة في مجال تنظيف وصيانة الألواح الشمسية باستخدام أحدث
            التقنيات الروبوتية
          </p>
        </div>

        <div className="gap-8 grid md:grid-cols-3 mb-12">
          <Card className="hover:shadow-lg p-8 text-center transition-shadow">
            <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-2 font-bold text-xl">خبرة واسعة</h3>
            <p className="text-muted-foreground">
              أكثر من 10 سنوات في مجال الطاقة الشمسية
            </p>
          </Card>

          <Card className="hover:shadow-lg p-8 text-center transition-shadow">
            <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-2 font-bold text-xl">تقنية متطورة</h3>
            <p className="text-muted-foreground">
              روبوتات ذكية لتنظيف فعال وآمن
            </p>
          </Card>

          <Card className="hover:shadow-lg p-8 text-center transition-shadow">
            <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-2 font-bold text-xl">فريق محترف</h3>
            <p className="text-muted-foreground">
              مهندسون وفنيون مدربون على أعلى مستوى
            </p>
          </Card>
        </div>

        <div className="bg-card shadow-sm p-8 md:p-12 rounded-2xl">
          <p className="mx-auto max-w-4xl text-foreground text-lg text-center leading-relaxed">
            نحن في <span className="font-bold text-primary">Green Clean </span>{" "}
            نؤمن بأهمية الطاقة النظيفة والمستدامة. نقدم حلولاً متكاملة لتنظيف
            وصيانة الألواح الشمسية باستخدام روبوتات متطورة تضمن الحفاظ على كفاءة
            الألواح عند أعلى مستوياتها. فريقنا المتخصص يعمل على مدار الساعة
            لضمان رضا عملائنا وتحقيق أقصى استفادة من استثماراتهم في الطاقة
            الشمسية.
          </p>
        </div>
      </div>
    </section>
  );
}
