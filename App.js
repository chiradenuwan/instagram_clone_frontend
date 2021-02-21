import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

class App extends Component {
  state = {
    feed: [{}, {}, {}, {}],
    ismodal: false,
  };

  get pagination() {
    const { entries, activeSlide } = this.carasoul.carouselItems;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  constructor(props) {
    super(props);
    this.carasoul = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Chiranjaya",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={{
        backgroundColor: "floralwhite",
        borderRadius: 5,
        height: 250,
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 1,
        borderColor: "#707070",
        padding: 5,
      }}
      >
        <Image style={{ height: 150, width: "100%", justifyContent: "center", borderRadius: 5 }} resizeMode="cover"
               source={{ uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" }}
        />
        <Text style={{ fontSize: 15, textAlign: "center", marginTop: 10 }}>{item.title}</Text>
        <Image style={{ height: 20, width: 20, position: "absolute", right: 10, top: 10 }}
               source={require("./assets/icon/close.png")}
        />
      </View>

    );
  }

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={
          false
        }

        showsVerticalScrollIndicator=
          {
            false
          }
        keyboardShouldPersistTaps=
          {
            "handled"
          }
        style=
          {
            {
              width: "100%", height: "100%", backgroundColor: "#FFFFFF",
            }
          }
      >
        <View style={{ paddingLeft: 30, paddingRight: 30, height: "100%", marginTop: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30 }} resizeMode="cover"
                     source={require("./assets/icon/camera.png")}
              />
            </TouchableOpacity>

            <View>
              <Image style={{ width: 105, height: 30 }} resizeMode="cover"
                     source={require("./assets/icon/logo.png")}
              />
            </View>
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30 }} resizeMode="cover"
                     source={require("./assets/icon/message.png")}
              />
            </TouchableOpacity>

          </View>

          <View style={{ marginTop: 30 }}>
            <View>
              <Text style={{ textAlign: "center", fontSize: 24 }}>Welcome to Instagram</Text>
            </View>
            <View>
              <Text style={{ textAlign: "center", fontSize: 14 }}>Follow people to start seeing the photos and videos
                they share</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", marginTop: 40, marginBottom: 40 }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.carasoul.carouselItems}
              sliderWidth={300}
              itemWidth={200}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({ activeIndex: index })} />
            {this.pagination}
          </View>

          {this.state.feed.map((value, index) => {
            return (
              <View style={{ marginTop: 15, paddingBottom: 50 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ width: 30, height: 30, borderRadius: 15 }}>
                    <Image style={{ width: 30, height: 30, borderRadius: 15 }} resizeMode="cover"
                           source={{ uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" }}
                    />
                  </View>
                  <View style={{ width: "100%", marginLeft: 5 }}>
                    <Text style={{ fontSize: 10 }}>Chiranjaya Denuwan</Text>
                    <Text style={{ fontSize: 10 }}>Colombo, Srilanka</Text>
                  </View>
                </View>
                <View style={{
                  width: "100%", height: "auto", borderRadius: 20, marginTop: 15, shadowColor: "blue",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  elevation: 10,
                }}>
                  <Image style={{ width: "100%", height: 300, borderRadius: 20 }} resizeMode="cover"
                         source={{ uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" }}
                  />
                </View>

                <View style={{ marginTop: 20 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Image style={{ width: 25, height: 25 }} resizeMode="cover"
                           source={require("./assets/img/Heart.png")}
                    />
                    <Image style={{ width: 25, height: 25, marginLeft: 10 }} resizeMode="cover"
                           source={require("./assets/img/Comment.png")}
                    />
                    <Image style={{ width: 25, height: 25, marginLeft: 10 }} resizeMode="cover"
                           source={require("./assets/img/Direct.png")}
                    />
                  </View>
                </View>
                <View style={{ marginTop: 5 }}>
                  <Text>
                    Caption is Here
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "#40BFFF" }}>
                    #Hashtag #Hashtag #Hashtag
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    )
      ;
  }
}


export default App;
