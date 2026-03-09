'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

// Types
interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  className?: string
  defaultValue?: string
  type?: 'single' | 'multiple'
}

// Brand Color
const BRAND_COLOR = '#D1834B'

// CSS for smooth animations
const accordionStyles = `
  .faq-accordion-content[data-state="closed"] {
    animation: accordion-slide-up 0.25s ease-out;
  }
  
  .faq-accordion-content[data-state="open"] {
    animation: accordion-slide-down 0.3s ease-out;
  }
  
  @keyframes accordion-slide-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
  
  @keyframes accordion-slide-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }
  
  /* Icon animations */
  .faq-icon-container .icon-plus,
  .faq-icon-container .icon-minus {
    transition: opacity 0.2s ease, transform 0.25s ease;
  }
  
  [data-state="open"] .faq-icon-container .icon-plus {
    opacity: 0;
    transform: rotate(90deg) scale(0.5);
  }
  
  [data-state="closed"] .faq-icon-container .icon-plus {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
  
  [data-state="open"] .faq-icon-container .icon-minus {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
  
  [data-state="closed"] .faq-icon-container .icon-minus {
    opacity: 0;
    transform: rotate(-90deg) scale(0.5);
  }
`

// Accordion Item Component
const FAQItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  {
    faq: FAQ
    value: string
  }
>(({ faq, value }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      value={value}
      className="border-b border-gray-100 last:border-b-0"
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={cn(
            'group flex w-full items-center justify-between gap-4',
            'py-5 px-4 md:px-6',
            'text-left',
            'transition-colors duration-200 ease-in-out',
            'hover:bg-gray-50/80 rounded-lg',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D1834B]/50 focus-visible:ring-offset-2',
            'disabled:pointer-events-none disabled:opacity-50',
            'cursor-pointer select-none'
          )}
        >
          <span className="text-base md:text-lg font-medium text-gray-900 pr-4">
            {faq.question}
          </span>
          {/* Animated Plus/Minus Icon */}
          <div className="faq-icon-container relative h-5 w-5 shrink-0">
            <Plus
              className="icon-plus absolute inset-0 h-5 w-5 transition-transform"
              style={{ color: BRAND_COLOR }}
            />
            <Minus
              className="icon-minus absolute inset-0 h-5 w-5 transition-transform"
              style={{ color: BRAND_COLOR }}
            />
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content
        className="faq-accordion-content overflow-hidden"
      >
        <div className="px-4 md:px-6 pb-5 pt-1">
          <p className="text-muted-foreground text-base leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
})
FAQItem.displayName = 'FAQItem'

// Main FAQ Accordion Component
export function FAQAccordion({ 
  faqs, 
  className,
  defaultValue,
  type = 'single',
}: FAQAccordionProps) {
  return (
    <>
      {/* Inject animations styles */}
      <style dangerouslySetInnerHTML={{ __html: accordionStyles }} />
      
      <div
        className={cn(
          'w-full rounded-xl bg-white',
          'border border-gray-100 shadow-sm',
          'overflow-hidden',
          className
        )}
      >
        <AccordionPrimitive.Root
          type={type as 'single'}
          collapsible
          defaultValue={defaultValue}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={`faq-${index}`}
              faq={faq}
              value={`faq-${index}`}
            />
          ))}
        </AccordionPrimitive.Root>
      </div>
    </>
  )
}

// Export types for external use
export type { FAQ, FAQAccordionProps }