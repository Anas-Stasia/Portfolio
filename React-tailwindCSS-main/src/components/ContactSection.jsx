
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!"
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities and ideas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Mail className="text-primary" size={24} />
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-sm text-muted-foreground">Email</h4>
                      <a
                        href="mailto:anastasiandanwea@gmail.com"
                        className="text-foreground hover:text-primary transition-colors font-medium break-all"
                      >
                        anastasiandanwea@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-sm text-muted-foreground">Phone</h4>
                      <a
                        href="tel:+233552373437"
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        +233 55 237 3437
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <MapPin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-sm text-muted-foreground">Location</h4>
                      <p className="text-foreground font-medium">
                        University of Ghana
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/anastasia-ndanwea-676235221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/Anas-Stasia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="mailto:anastasiandanwea@gmail.com"
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Send className="text-primary" size={24} />
                Send a Message
              </h3>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Your Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Hello! I'd like to talk about..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 text-lg py-4",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}