import React, { useState, useRef } from "react";

import { Text, ScrollView } from "react-native";

import { Container, Indicator, ScrollableModalContent } from "./styles";

import Modal from "react-native-modal";

type ScrollableModalProps = {
  isVisible: boolean,
  children: any,
  close: any,
  footer: any,
}


const ScrollableModal: React.FC<ScrollableModalProps> = ({ isVisible, children, close, footer }) => {
  const scrollViewRef: any = useRef();
	const [scrollOffset, setScrollOffset] = useState(0);

  const handleScrollTo = (p: any) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
	};

	const handleOnScroll = (event: any) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={close}
      swipeDirection={["down"]}
			scrollTo={handleScrollTo}
			scrollOffset={scrollOffset}
			scrollOffsetMax={400 - 300} // content height(views interno) - ScrollView height (altura do container)
			propagateSwipe={true}
			style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <Container>
				<Indicator />
				{/* { header && header } */}
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleOnScroll}
					scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >

					<ScrollableModalContent>
						{ children}
					</ScrollableModalContent>
        </ScrollView>
				{ footer && footer }
      </Container>
    </Modal>
  );
};

export default ScrollableModal;
