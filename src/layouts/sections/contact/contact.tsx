import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import styles from './contact.module.scss';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface EmailJSResponse {
    status: number;
    text: string;
}

interface EmailJSError {
    text: string;
}

const ContactPage: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    const phoneNumber = "+99477555555";

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        if (formRef.current) {

            const {
                VITE_EMAILJS_SERVICE_ID: serviceId,
                VITE_EMAILJS_TEMPLATE_ID: templateId,
                VITE_EMAILJS_PUBLIC_KEY: publicKey,
            } = import.meta.env;
            emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
                .then((result: EmailJSResponse) => {
                    setSuccess(true);
                    setLoading(false);
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                })
                .catch((error: EmailJSError) => {
                    setError('Mesaj göndərilə bilmədi. Xahiş edirik daha sonra cəhd edin.');
                    setLoading(false);
                    console.error('EmailJS Error:', error);
                });
        }
    };

    return (
        <div className={styles.container} id='contact'>
            <div className={styles.header}>
                <h1>Bizimlə Əlaqə</h1>
                <p>Hər hansı sual və ya təklifiniz varsa, bizimlə əlaqə saxlayın.</p>
            </div>

            <div className={styles.content}>
                <div className={styles.infoSection}>
                    <div className={styles.infoItem}>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <h3>Ünvan</h3>
                        <p>Bakı şəhəri, Nizami küçəsi 203</p>
                    </div>

                    <div className={styles.infoItem}>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <h3>Telefon</h3>

                        <a
                            href={`https://wa.me/${phoneNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappLink}
                            aria-label="Contact us on WhatsApp"
                        >
                            <span>{phoneNumber}</span>
                            <FaWhatsapp className={styles.whatsappIcon} />
                        </a>
                    </div>

                    <div className={styles.infoItem}>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <h3>Email</h3>
                        <p>info@yourcompany.az</p>
                    </div>

                    <div className={styles.infoItem}>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <h3>İş saatları</h3>
                        <p>Bazar ertəsi - Cümə: 9:00 - 18:00</p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h2>Bizə mesaj göndərin</h2>
                    {success && (
                        <div className={styles.successMessage} role="alert">
                            Mesajınız uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq!
                        </div>
                    )}
                    {error && <div className={styles.errorMessage} role="alert">{error}</div>}

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Ad və Soyadınız</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ad və Soyadınızı daxil edin"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email ünvanınızı daxil edin"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Mövzu</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Mesajın mövzusunu daxil edin"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Mesaj</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Mesajınızı daxil edin"
                                rows={5}
                                required
                                aria-required="true"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={loading}
                            aria-busy={loading}
                        >
                            {loading ? 'Göndərilir...' : 'Göndər'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;