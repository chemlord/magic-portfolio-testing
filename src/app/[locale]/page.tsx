import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, SmartImage, Badge, LetterFx, Background, Icon, Tag, Grid, Carousel, Column, Row } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources'; 
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const t = await getTranslations();
    const { home } = renderContent(t);
    const title = home.title;
    const description = home.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(decodeURIComponent(title))}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Home(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { home, about, person, newsletter } = renderContent(t);
    return (
        <Flex
            maxWidth="m" fillWidth gap="xl"
            direction="column" alignItems="center">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: home.title,
                        description: home.description,
                        url: `https://${baseURL}`,
                        image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
                        publisher: {
                            '@type': 'Person',
                            name: person.name,
                            image: {
                                '@type': 'ImageObject',
                                url: `${baseURL}${person.avatar}`,
                            },
                        },
                    }),
                }}
            />
            <Flex
                fillWidth
                direction="column"
                paddingY="0"
                gap="xs"
                alignItems="center">
                <RevealFx
                    justifyContent="center"
                    alignItems="center"
                    paddingBottom="8"
                    speed="fast"
                    style={{ display: "flex", justifyContent: "center", width: "100%", fontSize: "14px" }}
                >
                    <Badge 
                        href="/blog/ganaxolone-anti-seizure-medication" 
                        style={{ padding: "4px 8px", fontSize: "13px" }} 
                    >
                        <Flex alignItems="center" style={{ gap: "6px" }}>
                            <Tag variant="brand" size="s" label="Post" />
                            <LetterFx trigger="instant" speed="medium">
                                Read about Ganaxolone: An Anti-Seizure Medication
                            </LetterFx>
                        </Flex>
                    </Badge>
                </RevealFx>
                <Flex
                    direction="column"
                    fillWidth
                    maxWidth="s"
                    alignItems="center">
                    <RevealFx
                        translateY="4"
                        fillWidth
                        justifyContent="center"
                        paddingBottom="m">
                        <Heading
                            wrap="balance"
                            variant="display-strong-l"
                            align="center"
                        >
                            {home.headline}
                        </Heading>
                    </RevealFx>
                    <RevealFx
                        translateY="8"
                        delay={0.2}
                        fillWidth
                        justifyContent="center"
                        paddingBottom="m">
                        <Flex fillWidth justifyContent="center" alignItems="center">
                            <Text
                                align="center"
                                wrap="balance"
                                onBackground="neutral-weak"
                                variant="heading-default-l"
                            >
                                {home.subline}
                            </Text>
                        </Flex>
                    </RevealFx>

                    {/* THIS IS THE FIX: Wrapped the text + "Discover More" inside a single Flex */}
                    <Flex
                        fillWidth
                        direction="column"
                        alignItems="center"
                        gap="xs"
                    >
                        <RevealFx
                            speed="fast"
                            align="center"
                            delay={0.4}
                            translateY="12"
                            marginTop="2"
                            marginBottom="0"
                            onBackground="accent-medium"
                        >
                            Discover More about Me Below!
                        </RevealFx>
                    </Flex>

                    <RevealFx translateY="12" delay={0.4} marginTop="24">
                        <Flex fillWidth justifyContent="center">
                            <Button
                                id="about"
                                data-border="rounded"
                                href={`/${locale}/about`}
                                variant="tertiary"
                                suffixIcon="chevronRight"
                                size="m">
                                <Flex
                                    gap="8"
                                    alignItems="center">
                                    {about.avatar.display && (
                                        <Avatar
                                            style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
                                            src={person.avatar}
                                            size="m"/>
                                    )}
                                    {t("about.title")}
                                </Flex>
                            </Button>
                        </Flex>
                    </RevealFx>
                </Flex>
            </Flex>
            <RevealFx translateY="16" delay={0.6}>
                <Carousel
                    aspectRatio="16 / 9"
                    indicator="line"
                    images={[
                        { alt: 'Sample image 1', src: '/images/projects/project-01/hopefully.png' },
                        { alt: 'Sample image 2', src: '/images/gallery/liquid2200.png' },
                        { alt: 'Sample image 3', src: '/images/gallery/IMG_0447.jpeg' },
                    ]}
                />
            </RevealFx>
            { newsletter.display &&
                <Mailchimp newsletter={newsletter} />
            }
        </Flex>
    );
}
