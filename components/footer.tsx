import { Sun } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="mx-auto px-4 container">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-gradient-to-br from-primary to-secondary rounded-full w-10 h-10">
              <Sun className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">
                Green Clean Solar Energy
              </h3>
              <p className="text-muted-foreground text-sm">
                طاقة نظيفة، مستقبل مشرق
              </p>
            </div>
          </div>

          <p className="max-w-2xl text-muted-foreground text-center text-pretty">
            شريكك الموثوق في حلول الطاقة الشمسية. نعمل على توفير أفضل الخدمات
            لضمان استدامة وكفاءة أنظمتكم الشمسية.
          </p>

          <div className="text-muted-foreground text-sm text-center">
            <p>© 2025 Green Clean Solar Energy. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
