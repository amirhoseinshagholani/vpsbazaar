import Script from "next/script";

const ProductSchema = ({ category }: { category: string }) => {
    return (
        <>
            {
                category == '' && (
                    <>
                        <Script id="product-ld-json" type="application/ld+json" strategy="afterInteractive">
                            {JSON.stringify([{
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Flex ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 1 گیگابایت RAM، 25 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `flex ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "1990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Solo ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 2 گیگابایت RAM، 30 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `solo ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "2590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Pro ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 2 هسته CPU، 4 گیگابایت RAM، 40 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": "pro",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "3990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Pro+ ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 4 هسته CPU، 6 گیگابایت RAM، 60 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `pro+ ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "5790000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Ultra ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 6 هسته CPU، 8 گیگابایت RAM، 100 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `ultra ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "7590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Max ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 8 هسته CPU، 8 گیگابایت RAM، 200 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `max ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "9990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }])}
                        </Script>
                    </>
                )
            }
            {
                category == 'forex' && (
                    <>
                        <Script id="product-ld-json" type="application/ld+json" strategy="afterInteractive">
                            {JSON.stringify([{
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Flex ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 1 گیگابایت RAM، 25 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `flex ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "1990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Solo ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 2 گیگابایت RAM، 30 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `solo ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "2590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Pro ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 2 هسته CPU، 4 گیگابایت RAM، 40 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": "pro",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "3990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }])}
                        </Script>
                    </>
                )
            }
            {
                category == 'linux' && (
                    <>
                        <Script id="product-ld-json" type="application/ld+json" strategy="afterInteractive">
                            {JSON.stringify([{
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Flex ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 1 گیگابایت RAM، 25 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `flex ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "1990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Solo ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 2 گیگابایت RAM، 30 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `solo ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "2590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Pro ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 2 هسته CPU، 4 گیگابایت RAM، 40 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": "pro",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "3990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }])}
                        </Script>
                    </>
                )
            }
            {
                category == 'mikrotik' && (
                    <>
                        <Script id="product-ld-json" type="application/ld+json" strategy="afterInteractive">
                            {JSON.stringify([{
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Solo ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 2 گیگابایت RAM، 30 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `solo ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "2590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Pro ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 2 هسته CPU، 4 گیگابایت RAM، 40 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": "pro",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "3990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }])}
                        </Script>
                    </>
                )
            }
            {
                category == 'professional' && (
                    <>
                        <Script id="product-ld-json" type="application/ld+json" strategy="afterInteractive">
                            {JSON.stringify([{
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Pro ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 2 هسته CPU، 4 گیگابایت RAM، 40 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": "pro",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "3990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Pro+ ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 4 هسته CPU، 6 گیگابایت RAM، 60 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `pro+ ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "5790000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Ultra ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 6 هسته CPU، 8 گیگابایت RAM، 100 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `ultra ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "7590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Max ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 8 هسته CPU، 8 گیگابایت RAM، 200 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `max ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "9990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }])}
                        </Script>
                    </>
                )
            }
            {
                category == 'windows' && (
                    <>
                        <Script id="product-ld-json" type="application/ld+json" strategy="afterInteractive">
                            {JSON.stringify([{
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Solo ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 2 گیگابایت RAM، 30 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `solo ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "2590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Pro ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 2 هسته CPU، 4 گیگابایت RAM، 40 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": "pro",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "3990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            },{
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Ultra ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 6 هسته CPU، 8 گیگابایت RAM، 100 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `ultra ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "7590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }])}
                        </Script>
                    </>
                )
            }
            {
                category == 'wordpress' && (
                    <>
                        <Script id="product-ld-json" type="application/ld+json" strategy="afterInteractive">
                            {JSON.stringify([{
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Solo ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 2 گیگابایت RAM، 30 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `solo ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "2590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Pro ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 2 هسته CPU، 4 گیگابایت RAM، 40 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": "pro",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "3990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }])}
                        </Script>
                    </>
                )
            }
            {
                category == 'economy' && (
                    <>
                        <Script id="product-ld-json" type="application/ld+json" strategy="afterInteractive">
                            {JSON.stringify([{
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Flex ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 1 گیگابایت RAM، 25 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `flex ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "1990000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }, {
                                "@context": "https://schema.org",
                                "@type": "Product",
                                "name": `Solo ${category ? category : ""}`,
                                "image": "https://vpsbazaar.cloud/img/og-image.webp",
                                "description": "سرور مجازی Flex با 1 هسته CPU، 2 گیگابایت RAM، 30 گیگابایت SSD، 100 گیگابایت ترافیک ماهانه، لوکیشن ایران و پشتیبانی رایگان.",
                                "sku": `solo ${category ? category : ""}`,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "VPSBazaar"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://vpsbazaar.cloud/vps",
                                    "priceCurrency": "IRR",
                                    "price": "2590000",
                                    "itemCondition": "https://schema.org/NewCondition",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "VPSBazaar"
                                    }
                                }
                            }])}
                        </Script>
                    </>
                )
            }

        </>
    )
}

export default ProductSchema;