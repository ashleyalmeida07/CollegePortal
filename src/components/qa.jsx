"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 bg-[#faf9f6]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">Find answers to common questions about SkillBuddy</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I get started with SkillBuddy?</AccordionTrigger>
          <AccordionContent>
            Getting started is easy! Simply create an account, browse our course catalog, and enroll in any program that
            interests you. Our platform will guide you through the learning process step by step.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What types of courses do you offer?</AccordionTrigger>
          <AccordionContent>
            We offer a wide range of courses across various categories including technology, business, creative arts,
            and personal development. Our courses are designed for all skill levels, from beginners to advanced
            learners.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Are the courses self-paced?</AccordionTrigger>
          <AccordionContent>
            Yes, most of our courses are self-paced, allowing you to learn at your own convenience. You can access the
            course materials 24/7 and progress through the lessons according to your schedule.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Do you offer certificates upon completion?</AccordionTrigger>
          <AccordionContent>
            Yes, you'll receive a digital certificate upon successful completion of each course. These certificates can
            be shared on your professional networks and added to your resume.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
          <AccordionContent>
            We accept all major credit cards, PayPal, and bank transfers. We also offer flexible payment plans for some
            of our premium courses and programs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Is there a refund policy?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer a 30-day money-back guarantee for most of our courses. If you're not satisfied with your
            learning experience, you can request a full refund within the first 30 days of enrollment.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Still have questions? Contact our support team at{" "}
          <a href="mailto:support@skillbuddy.com" className="text-primary hover:underline">
            support@skillbuddy.com
          </a>
        </p>
      </div>
    </section>
  )
}

