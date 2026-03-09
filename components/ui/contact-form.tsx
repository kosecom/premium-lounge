'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

// ============================================
// ZOD VALIDATION SCHEMA
// ============================================

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name muss mindestens 2 Zeichen lang sein')
    .max(100, 'Name darf maximal 100 Zeichen lang sein'),
  email: z
    .string()
    .email('Bitte geben Sie eine gültige E-Mail-Adresse ein')
    .max(255, 'E-Mail darf maximal 255 Zeichen lang sein'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s+()-]+$/.test(val),
      'Bitte geben Sie eine gültige Telefonnummer ein'
    ),
  message: z
    .string()
    .min(10, 'Nachricht muss mindestens 10 Zeichen lang sein')
    .max(2000, 'Nachricht darf maximal 2000 Zeichen lang sein'),
  privacy: z
    .boolean()
    .refine((val) => val === true, 'Sie müssen der Datenschutzerklärung zustimmen'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

// ============================================
// FORM SUBMISSION TYPE
// ============================================

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>
  className?: string
}

// ============================================
// CONTACT FORM COMPONENT
// ============================================

export function ContactForm({ onSubmit, className }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      privacy: false,
    },
    mode: 'onBlur',
  })

  const privacyChecked = watch('privacy')

  const onFormSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('idle')
      setErrorMessage('')

      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Default: Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      )
    }
  }

  return (
    <div className={cn('w-full', className)}>
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6" noValidate>
        {/* Name Field */}
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            Name <span className="text-[#D1834B]">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Ihr vollständiger Name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(
              'h-12 rounded-lg border-[#E5E5E5] bg-[#FAFAF8] text-base transition-all duration-200',
              'placeholder:text-muted-foreground',
              'focus:border-[#D1834B] focus:ring-[#D1834B]/20 focus:ring-[3px]',
              errors.name && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              touchedFields.name && !errors.name && 'border-[#D1834B]'
            )}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" className="flex items-center gap-1.5 text-sm text-red-500" role="alert">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            E-Mail <span className="text-[#D1834B]">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="ihre@email.de"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(
              'h-12 rounded-lg border-[#E5E5E5] bg-[#FAFAF8] text-base transition-all duration-200',
              'placeholder:text-muted-foreground',
              'focus:border-[#D1834B] focus:ring-[#D1834B]/20 focus:ring-[3px]',
              errors.email && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              touchedFields.email && !errors.email && 'border-[#D1834B]'
            )}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="flex items-center gap-1.5 text-sm text-red-500" role="alert">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Field (Optional) */}
        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="text-sm font-medium text-foreground"
          >
            Telefon <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+49 123 456789"
            aria-required="false"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={cn(
              'h-12 rounded-lg border-[#E5E5E5] bg-[#FAFAF8] text-base transition-all duration-200',
              'placeholder:text-muted-foreground',
              'focus:border-[#D1834B] focus:ring-[#D1834B]/20 focus:ring-[3px]',
              errors.phone && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              touchedFields.phone && !errors.phone && 'border-[#D1834B]'
            )}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="phone-error" className="flex items-center gap-1.5 text-sm text-red-500" role="alert">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Nachricht <span className="text-[#D1834B]">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="Wie können wir Ihnen helfen?"
            rows={5}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={cn(
              'min-h-[140px] rounded-lg border-[#E5E5E5] bg-[#FAFAF8] text-base transition-all duration-200 resize-none',
              'placeholder:text-muted-foreground',
              'focus:border-[#D1834B] focus:ring-[#D1834B]/20 focus:ring-[3px]',
              errors.message && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              touchedFields.message && !errors.message && 'border-[#D1834B]'
            )}
            {...register('message')}
          />
          {errors.message && (
            <p id="message-error" className="flex items-center gap-1.5 text-sm text-red-500" role="alert">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Privacy Checkbox */}
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id="privacy"
              checked={privacyChecked}
              onCheckedChange={(checked) => setValue('privacy', checked === true, { shouldValidate: true })}
              aria-required="true"
              aria-invalid={!!errors.privacy}
              aria-describedby={errors.privacy ? 'privacy-error' : undefined}
              className={cn(
                'mt-0.5 h-5 w-5 rounded border-2 border-[#E5E5E5] bg-[#FAFAF8]',
                'data-[state=checked]:bg-[#D1834B] data-[state=checked]:border-[#D1834B]',
                'focus-visible:ring-[#D1834B]/20 focus-visible:ring-[3px]',
                errors.privacy && 'border-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500'
              )}
            />
            <Label
              htmlFor="privacy"
              className="text-sm leading-relaxed text-muted-foreground cursor-pointer"
            >
              Ich habe die{' '}
              <a
                href="/datenschutz"
                className="text-[#D1834B] hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung
              </a>{' '}
              gelesen und akzeptiere diese. <span className="text-[#D1834B]">*</span>
            </Label>
          </div>
          {errors.privacy && (
            <p id="privacy-error" className="flex items-center gap-1.5 text-sm text-red-500 ml-8" role="alert">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {errors.privacy.message}
            </p>
          )}
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div
            className="flex items-center gap-3 rounded-lg bg-green-50 border border-green-200 p-4"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-green-800">
                Vielen Dank für Ihre Nachricht!
              </p>
              <p className="text-sm text-green-700">
                Wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div
            className="flex items-center gap-3 rounded-lg bg-red-50 border border-red-200 p-4"
            role="alert"
            aria-live="assertive"
          >
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-red-800">
                Nachricht konnte nicht gesendet werden
              </p>
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'w-full h-12 rounded-lg text-base font-medium',
            'bg-[#D1834B] text-white',
            'hover:bg-[#B8723F] hover:shadow-lg hover:shadow-[#D1834B]/25',
            'active:scale-[0.98]',
            'transition-all duration-200',
            'disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none',
            'focus-visible:ring-[#D1834B]/20 focus-visible:ring-[3px]'
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              <span>Wird gesendet...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden="true" />
              <span>Nachricht senden</span>
            </>
          )}
        </Button>

        {/* Required Fields Notice */}
        <p className="text-xs text-muted-foreground text-center">
          Mit <span className="text-[#D1834B]">*</span> markierte Felder sind Pflichtfelder
        </p>
      </form>
    </div>
  )
}

export default ContactForm