"use client";

import Masonry from 'react-masonry-css';
import { Flex, SmartImage, LetterFx } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { useTranslations } from 'next-intl';
import { renderContent } from '@/app/resources';
import { useState } from 'react';

export default function MasonryGrid() {
    const breakpointColumnsObj = {
        default: 4,
        1440: 3,
        1024: 2,
        560: 1
    };

    const t = useTranslations();
    const { gallery } = renderContent(t);

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}>
            {gallery.images.map((image, index) => {
                const [showCaption, setShowCaption] = useState(true);

                return (
                    <Flex
                        key={index}
                        className={styles.imageWrapper}
                        fillWidth
                        position="relative"
                        onMouseEnter={() => setShowCaption(false)}
                        onMouseLeave={() => setShowCaption(true)}
                        style={{
                            transition: "background 0.5s ease-in-out", // Smooth fade effect
                        }}>
                        <SmartImage
                            radius="m"
                            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
                            src={image.src}
                            alt={image.alt}
                            className={styles.gridItem}
                            enlarge={true}
                            objectFit="cover"
                        />
                        {showCaption && (
                            <Flex
                                className={styles.details}
                                position="absolute"
                                fillWidth
                                fillHeight
                                zIndex={1}
                                direction="column"
                                justifyContent="flex-end"
                                alignItems="center"
                                gap="8"
                                textVariant="label-default-s"
                                paddingBottom="32"
                                paddingX="24"
                                style={{
                                    color: image.textColor || "white",
                                    background: "rgba(0, 0, 0, 0.4)", // Slightly less black
                                    borderRadius: "8px",
                                    opacity: showCaption ? 1 : 0,
                                    transition: "opacity 0.5s ease-in-out", // Smooth fade-in/out effect
                                }}>
                                <LetterFx
                                    style={{ fontWeight: "bold" }} // Bold title
                                    speed="medium">
                                    {image.caption}
                                </LetterFx>
                                <LetterFx speed="medium">{image.details}</LetterFx>
                            </Flex>
                        )}
                    </Flex>
                );
            })}
        </Masonry>
    );
}
