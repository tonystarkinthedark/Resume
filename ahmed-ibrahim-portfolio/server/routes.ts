import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";

// Configure nodemailer (you can also use environment variables)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password'
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER || 'noreply@ahmedibrahim.com',
          to: 'ahmed.ibrahim@email.com', // Ahmed's email
          subject: `New Contact from ${contact.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${contact.name}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Company:</strong> ${contact.company || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${contact.message}</p>
          `
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue even if email fails
      }
      
      res.json({ success: true, message: "Contact form submitted successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to process contact form" });
      }
    }
  });

  // Generate and download PDF resume
  app.get("/api/resume/download", async (req, res) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Ahmed_Ibrahim_Resume.pdf"');
      
      doc.pipe(res);
      
      // Header
      doc.fontSize(24).font('Helvetica-Bold').text('Ahmed Ibrahim', 50, 50);
      doc.fontSize(16).font('Helvetica').text('Digital Marketing & Automation Expert', 50, 80);
      doc.fontSize(12).text('Phoenix, AZ | (602) 339-9737 | LinkedIn: /ahmed-ibrahim-486215158', 50, 100);
      
      // Professional Summary
      doc.fontSize(16).font('Helvetica-Bold').text('Professional Summary', 50, 140);
      doc.fontSize(12).font('Helvetica').text(
        'Performance marketer with 6+ years of experience managing $1.5M+ in PPC budgets across Google, Facebook, and TikTok. Known for pairing strategy with execution—delivering 15:1 ROI, building custom automation scripts that saved $65K+/year, and turning at-risk clients into long-term partners.',
        50, 160, { width: 500 }
      );
      
      // Experience
      doc.fontSize(16).font('Helvetica-Bold').text('Professional Experience', 50, 220);
      
      // Current Role
      doc.fontSize(14).font('Helvetica-Bold').text('Digital Marketing Strategist', 50, 250);
      doc.fontSize(12).font('Helvetica').text('V Digital Services – Phoenix, AZ | Oct 2024 – Present', 50, 270);
      doc.fontSize(10).text('• Managed $1.5M+ in annual ad spend across 50+ Google and Facebook Ads accounts', 60, 290);
      doc.text('• Delivered sub-$10 cost-per-conversion while driving 28–200+ conversions monthly', 60, 305);
      doc.text('• Built Google Ads QA script saving $25K+ annually and reducing manual review time by 80%', 60, 320);
      
      // Previous roles
      doc.fontSize(14).font('Helvetica-Bold').text('Media Buyer', 50, 350);
      doc.fontSize(12).font('Helvetica').text('Blueprint Digital LLC – Atlanta, GA | Feb 2022 – Oct 2023', 50, 370);
      doc.fontSize(10).text('• Scaled client base by 50% within a year through strategic PPC execution', 60, 390);
      doc.text('• Increased conversions by 30% via audience targeting and optimized creative', 60, 405);
      
      doc.fontSize(14).font('Helvetica-Bold').text('Media Buyer', 50, 435);
      doc.fontSize(12).font('Helvetica').text('ReachMobi – Philadelphia, PA | Feb 2021 – Feb 2022', 50, 455);
      doc.fontSize(10).text('• Achieved consistent 15:1 ROI across Google, Facebook, and TikTok', 60, 475);
      doc.text('• Reduced CPA by 25% through precise segmentation and data-led optimizations', 60, 490);
      
      // Skills
      doc.fontSize(16).font('Helvetica-Bold').text('Core Skills', 50, 530);
      doc.fontSize(12).font('Helvetica').text(
        'Google Ads • Facebook Ads • TikTok Ads • Google Analytics • PPC Strategy • Google Sheets Scripting • Automation • SEO • Client Reporting • Team Leadership',
        50, 550, { width: 500 }
      );
      
      // Certifications
      doc.fontSize(16).font('Helvetica-Bold').text('Certifications', 50, 600);
      doc.fontSize(12).font('Helvetica').text('• Google Ads Certified (Search, Display, Shopping, Apps, Video)', 50, 620);
      doc.text('• Google Analytics Certified', 50, 635);
      
      // Languages
      doc.fontSize(16).font('Helvetica-Bold').text('Languages', 50, 670);
      doc.fontSize(12).font('Helvetica').text('English (Fluent) • Arabic (Fluent) • Spanish (Intermediate)', 50, 690);
      
      doc.end();
      
    } catch (error) {
      console.error('PDF generation failed:', error);
      res.status(500).json({ error: "Failed to generate PDF resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
