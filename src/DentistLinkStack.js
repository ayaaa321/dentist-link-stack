import React from 'react';
import './DentistLinkStack.css';
import { FaSnapchat, FaTiktok } from 'react-icons/fa6';
import { Instagram, Facebook, MessageCircle, LinkedinIcon } from 'lucide-react';
import profileImage from './images/profile.jpg';

export default function DentistLinkStack() {
 
  const links = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/dr_moussaoui_imrane',
      class: 'insta'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/17m56uvw6S/',
      class: 'facebook'
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/imrane-moussaoui41000?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      class: 'LinkedIn'
    },
    {
      name: 'Snapchat',
      icon: FaSnapchat,
      url: 'https://www.snapchat.com/add/dr_moussaoui',
      class: 'snapchat'
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      url: 'https://www.tiktok.com/@dr_moussaoui_perio?_t=ZM-90yxoQi2QsV&_r=1',
      class: 'tiktok'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/+213664619900',
      class: 'whatsapp'
    }
  ];
 
  return (
    
    <div className="container">
      <div className="glass-card">
        <div className="profile-section">
          <img 
            src={profileImage} 
            alt="Dr. Moussaoui Imrane" 
            className="profile-image"
          />
          <h1 className="name">Dr. Moussaoui Imrane  </h1>
          <p className="title">
            Specialist in Periodontology,
            Esthetic Periodontal Surgery & Implant Dentistry</p>
        </div>
        
        <div className="links-container">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                className={`link-button ${link.class}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent size={20} />
                <span>{link.name}</span>
              </a>
            );
          })}
          
          <a href="mailto:dr.imrane.moussaoui@gmail.com" className="email-btn">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
