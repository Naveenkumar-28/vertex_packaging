import {
    ShieldCheck, Shield, Droplets, Wind, Lock, Check, Layers, Zap, Printer, Palette,
    Ruler, Maximize, Flame, Snowflake, Sparkles, Gem, FlaskConical, Sun, Package,
    PackageOpen, Scissors, Recycle, Tag, Boxes, Weight, Settings, Eye, Container,
    Info, Repeat, Globe, Hand, Stamp, Fan, Link2, AppWindow,
    FileText, Dumbbell,
} from "lucide-react";

// 1) Exact matches
export const FEATURE_ICONS = {
    // Barrier / protection
    "High Barrier": ShieldCheck,
    "High Barrier Options": ShieldCheck,
    "Barrier Material Options": ShieldCheck,
    "Light Barrier": Sun,
    "Moisture Barrier": Droplets,
    "Moisture Resistant": Droplets,
    "Moisture Protection": Droplets,
    "Moisture Protection Options": Droplets,
    "Oxygen Barrier": Wind,
    "Oxygen Barrier Options": Wind,
    "Aroma Lock": Wind,
    "Aroma Protection": Wind,
    "Optional Degassing Valve": Fan,
    "Puncture Resistant": Shield,
    "Leak Proof": Droplets,
    "Alcohol Resistant": FlaskConical,
    "Freeze Resistant": Snowflake,
    "Dust Protection": Shield,
    "Protective Packaging": Shield,
    "Sterile Grade": Sparkles,

    // Safety / compliance
    "Food Safe": Check,
    "Food-Contact Material Options": Check,
    "Tamper Evident": Lock,
    "Tamper-Evident Design Options": Lock,

    // Closure
    "Zip Lock": Lock,
    "Re-closable": Repeat,
    "Resealable Zipper Option": Repeat,
    "Multiple Closure Options": Lock,
    "Easy-Open Options": Scissors,
    "Window": AppWindow,
    "Handle Options": Hand,

    // Sealing / speed
    "Heat Sealable": Flame,
    "Heat Sealable Options": Flame,
    "Heat-Sealed Edges": Flame,
    "High Speed": Zap,
    "High Speed Sealing": Zap,
    "Machine-Compatible Options": Settings,
    "Manual and Machine Options": Settings,

    // Structure / material
    "Multi-layer": Layers,
    "Multiple Film Structures": Layers,
    "Multiple Film Material Options": Layers,
    "Lamination": Layers,
    "Lamination Option": Layers,
    "Custom Lamination": Layers,
    "Strong Woven Fabric": Dumbbell,
    "Durable Woven Structure": Dumbbell,
    "Heavy-Duty Construction Options": Dumbbell,
    "Multiple Ply Options": Layers,
    "Multiple Board Grades": Layers,
    "Multiple Paper Grades": Layers,
    "Recyclable Paper-Based Material Options": Recycle,
    "Recyclable Paper Options": Recycle,
    "Eco Refill": Recycle,
    "Narrow Web": Ruler,

    // Printing / branding
    "Custom Print": Printer,
    "Custom Printing": Printer,
    "Premium Print": Printer,
    "High-Quality Printing": Printer,
    "High-Quality Graphics": Palette,
    "Printed Branding": Stamp,
    "Branding Options": Tag,
    "Branding Support": Tag,
    "Custom Branding": Tag,
    "Batch Information Printing": FileText,
    "Clear Product Information": Info,
    "Premium Look": Gem,
    "Retail-Ready Design": Gem,
    "Clear Presentation": Eye,
    "Finishing Options": Sparkles,

    // Size / custom
    "Custom Dimensions": Ruler,
    "Custom Sizes": Ruler,
    "Flexible Dimensions": Ruler,
    "Custom Thickness": Ruler,
    "Flexible Film Thickness": Ruler,
    "Multiple Thickness Options": Ruler,
    "Custom Roll Dimensions": Ruler,
    "Custom Roll Width": Ruler,
    "Custom Roll Sizes": Ruler,
    "Multiple Roll Widths": Ruler,
    "Multiple Capacity Options": Maximize,
    "Custom Sack Fit": Ruler,
    "Custom Bag Formats": Package,
    "Custom Die-Cut Shapes": Scissors,
    "Custom Die-Cut Design": Scissors,
    "Custom Inserts": PackageOpen,
    "Custom Design": Palette,
    "Compact Packaging": Package,
    "Folded Bag Options": Package,

    // Bulk / logistics
    "Suitable for Bulk Packaging": Boxes,
    "Bulk Packaging": Boxes,
    "Bulk Packaging Compatibility": Boxes,
    "Industrial Packaging Options": Container,
    "Container Compatibility": Container,
    "Stacking Strength Options": Weight,
    "Stacking Performance Options": Weight,
    "Load Stabilization": Weight,
    "Secure Bundling": Link2,
    "Product Bundling": Link2,
    "Export Packaging Design": Globe,
};

// 2) Keyword fallback for features not listed above
const KEYWORD_ICONS = [
    [/barrier|resistant|protect/i, ShieldCheck],
    [/moisture|leak|liquid/i, Droplets],
    [/oxygen|aroma|air/i, Wind],
    [/lock|tamper|closure|zipper/i, Lock],
    [/seal|heat/i, Flame],
    [/print|graphic|color|colour/i, Printer],
    [/recycl|eco/i, Recycle],
    [/size|dimension|width|thick|length/i, Ruler],
    [/layer|lamina|ply|film/i, Layers],
    [/bulk|stack|load|pallet/i, Boxes],
    [/brand|tag/i, Tag],
    [/speed|fast/i, Zap],
    [/premium|look|design|finish/i, Gem],
    [/safe|food|sterile|clean/i, Check],
];

export const DEFAULT_FEATURE_ICON = Check;

export const getFeatureIcon = (feature) => {
    if (FEATURE_ICONS[feature]) return FEATURE_ICONS[feature];
    const hit = KEYWORD_ICONS.find(([re]) => re.test(feature));
    return hit ? hit[1] : DEFAULT_FEATURE_ICON;
};