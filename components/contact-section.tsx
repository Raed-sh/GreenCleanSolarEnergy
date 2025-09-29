"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "الاسم يجب أن يكون حرفين على الأقل",
  }),
  email: z.string().email({
    message: "البريد الإلكتروني غير صحيح",
  }),
  phone: z.string().min(10, {
    message: "رقم الهاتف يجب أن يكون 10 أرقام على الأقل",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    alert("شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.");
    form.reset();
  };

  return (
    <section id="contact" className="bg-muted/30 py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-foreground text-4xl md:text-5xl">
            تواصل معنا
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg text-pretty">
            نحن هنا للإجابة على جميع استفساراتكم وتقديم أفضل الحلول لاحتياجاتكم
          </p>
        </div>

        <div className="gap-8 grid md:grid-cols-2 mx-auto max-w-6xl">
          <Card className="p-8 md:p-10">
            <h3 className="mb-6 font-bold text-2xl">أرسل لنا رسالة</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الاسم الكامل</FormLabel>
                      <FormControl>
                        <Input placeholder="أدخل اسمك" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>البريد الإلكتروني</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>رقم الهاتف</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+962 XX XXX XXXX"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full">
                  إرسال الرسالة
                </Button>
              </form>
            </Form>
          </Card>

          <div className="space-y-6">
            <Card className="hover:shadow-lg p-8 transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 rounded-full w-12 h-12">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-lg">الهاتف</h4>
                  <p className="text-muted-foreground" dir="ltr">
                    +962 XX XXX XXXX
                  </p>
                  <p className="text-muted-foreground" dir="ltr">
                    +962 XX XXX XXXX
                  </p>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-lg p-8 transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-secondary/10 rounded-full w-12 h-12">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-lg">البريد الإلكتروني</h4>
                  <p className="text-muted-foreground" dir="ltr">
                    info@greencleansolar.com
                  </p>
                  <p className="text-muted-foreground" dir="ltr">
                    support@greencleansolar.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-lg p-8 transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-accent/10 rounded-full w-12 h-12">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-lg">العنوان</h4>
                  <p className="text-muted-foreground">
                    الأردن <br />
                    عمان، الدوار الخامس
                    <br />
                    ص.ب: 12345
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground">
              <h4 className="mb-3 font-bold text-xl">ساعات العمل</h4>
              <div className="space-y-2">
                <p>السبت - الخميس: 8:00 ص - 6:00 م</p>
                <p>الجمعة: مغلق</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
