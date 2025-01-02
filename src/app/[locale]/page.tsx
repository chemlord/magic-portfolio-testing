import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, Arrow } from '@/once-ui/components';
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
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

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
    paddingY="l"
    gap="m"
    alignItems="center"> {/* Centering the entire column */}
    <Flex
        direction="column"
        fillWidth
        maxWidth="s"
        alignItems="center"> {/* Centering content in the inner column */}
        <RevealFx
            translateY="4"
            fillWidth
            justifyContent="center"
            paddingBottom="m">
            <Heading
                wrap="balance"
                variant="display-strong-l"
                align="center"> {/* Center align text */}
                {home.headline}
            </Heading>
        </RevealFx>
        <RevealFx
    translateY="8"
    delay={0.2}
    fillWidth
    justifyContent="center"
    paddingBottom="m">
    <Flex fillWidth justifyContent="center" alignItems="center"> {/* Ensures horizontal centering */}
        <Text
            align="center"
            wrap="balance"
            onBackground="neutral-weak"
            variant="heading-default-l">
            {home.subline}
        </Text>
    </Flex>
</RevealFx>
        <RevealFx translateY="12" delay={0.4}>
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
				<Projects range={[1]} locale={locale}/>
				<Projects range={[1]} locale={locale}/>
				{ newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
			</RevealFx>
		</Flex>
	);
}
