import { type IconStyle } from "@/components/ui/payment-method-icon";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PaymentMethodsProps {
  iconStyle?: IconStyle;
  iconWidth?: number;
  iconHeight?: number;
  borderColor?: string;
  borderWidth?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

const PAYMENT_ICONS = [
  // Bangladesh Payment Methods
  { icon: "bd/bkash", alt: "bKash" },
  { icon: "bd/nagad", alt: "Nagad" },
  { icon: "bd/rocket", alt: "Rocket" },
  { icon: "bd/upay", alt: "Upay" },
  // Major Cards
  { icon: "visa", alt: "Visa" },
  { icon: "mastercard", alt: "Mastercard" },
  { icon: "discover", alt: "Discover" },
  { icon: "american-express", alt: "American Express" },
  // Digital Wallets
  { icon: "paypal", alt: "PayPal" },
  { icon: "google-pay", alt: "Google Pay" },
  // Bank Transfer
  { icon: "bd/bank-transfer", alt: "Bank Transfer" },
] as const;

export function PaymentMethods({
  iconStyle = "outline",
  iconWidth = 66,
  iconHeight = 44,
  borderColor = "border-border dark:border-black/50",
  borderWidth = "border-2 dark:border-3",
  backgroundColor = "bg-white dark:bg-white/90",
  borderRadius = "rounded-sm",
}: PaymentMethodsProps) {
  // Logo Style - No Wrapper
  if (iconStyle === "logo") {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {PAYMENT_ICONS.map(({ icon, alt }) => (
          <div key={icon} className="hover-shake">
            <Image
              src={`/payment-logos/${icon}.svg`}
              alt={alt}
              width={iconWidth}
              height={iconHeight}
            />
          </div>
        ))}
      </div>
    );
  }

  // Flat, Rounded, And Outline Styles With Tailwind Classes
  return (
    <div className="flex flex-wrap items-center gap-2">
      {PAYMENT_ICONS.map(({ icon, alt }) => (
        <div key={icon} className="hover-shake">
          <div
            className={cn(
              "inline-block overflow-hidden",
              borderWidth,
              borderColor,
              backgroundColor,
              borderRadius
            )}
            style={{ width: iconWidth, height: iconHeight }}
          >
            <Image
              src={`/payment-logos/${icon}.svg`}
              alt={alt}
              width={iconWidth}
              height={iconHeight}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
