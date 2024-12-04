import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSuccess(true);
    setLoading(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '+244 923 456 789',
      link: 'tel:+244923456789'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@m3tech.co.ao',
      link: 'mailto:contato@m3tech.co.ao'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Luanda, Angola',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <Section
      id="contact"
      title="Entre em Contato"
      subtitle="Estamos prontos para ajudar no seu próximo projeto"
      className="bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start space-x-4 group"
                  target={item.icon === MapPin ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <div className="p-3 rounded-lg bg-white group-hover:bg-m3-bright transition-colors">
                    <item.icon className="h-6 w-6 text-m3-bright group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 group-hover:text-m3-bright transition-colors">
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              {/* Add social media links here */}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 focus:border-m3-bright focus:ring-m3-bright"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 focus:border-m3-bright focus:ring-m3-bright"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 focus:border-m3-bright focus:ring-m3-bright"
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Assunto
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 focus:border-m3-bright focus:ring-m3-bright"
                required
                disabled={loading}
              >
                <option value="">Selecione um assunto</option>
                <option value="outsourcing">Outsourcing de TI</option>
                <option value="infrastructure">Infraestrutura</option>
                <option value="development">Desenvolvimento</option>
                <option value="security">Segurança</option>
                <option value="other">Outro</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-lg border-gray-300 focus:border-m3-bright focus:ring-m3-bright"
                required
                disabled={loading}
              />
            </div>

            <div className="md:col-span-2">
              {success && (
                <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              
              <Button
                type="submit"
                icon={Send}
                loading={loading}
                className="w-full"
              >
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;