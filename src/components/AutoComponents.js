import React, { Component } from 'react';
import { Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


const items = [
    {
      src: '/assets/images/tellStory9.jpg',
      captionHeader: 'Do You Have A Story to tell',
      caption: 'We want to hear your story. Submit your story for all to hear.',
    },
    {
      src: '/assets/images/moscow.png',
      captionHeader: 'Galleries Showcase',
      caption: 'Take a look at the art we love!'
    },
    {
      src: '/assets/images/linksRose.png',
      captionHeader: 'Dont break it, just buy it',
      caption: 'Now you can help us sell out by buying our stuff!'
    }
  ];
  
  class Auto extends Component {
      constructor(props) {
          super(props);
          this.state = { activeIndex: 0 };
          this.next = this.next.bind(this);
          this.previous = this.previous.bind(this);
          this.goToIndex = this.goToIndex.bind(this);
          this.onExiting = this.onExiting.bind(this);
          this.onExited = this.onExited.bind(this);
      }
  
      onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
  
      render() {
          const { activeIndex } = this.state;
  
          const slides = items.map((item) => {
              return (
                  <CarouselItem
                      onExiting={this.onExiting}
                      onExited={this.onExited}
                      key={item.src}
                  >
                      <img src={item.src} alt={item.altText} />
                      <CarouselCaption captionText={item.caption} captionHeader={item.captionHeader}  />
                  </CarouselItem>
              );
          });
  
          return (
              <div className="container">
                  <div class="row mt-3 ">
                      <div class="col-12">
                          <h1>Stories With A Voice</h1>
                          <h3>Let Your Voice Be Heard</h3>
                          <p></p>
                      </div>
                  <div class="row mt-5 ml-2 mr-2 mb-5">
                      <div class="col-12 col-md-8 mx-auto">
                          <Carousel
                              activeIndex={activeIndex}
                              next={this.next}
                              previous={this.previous}
                          >
                              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                              {slides}
                              <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
                              <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
                          </Carousel>
                      </div>
                  </div>
                  </div>
              </div>
          );
      }
  }
  
  export default Auto;