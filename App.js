import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

class App extends Component {

  // state = {
  //   feed: [],
  //   ismodal: false
  // };
  // componentDidMount() {
  //   this.callServiceFunc();
  //
  //   this.props.navigation.addListener('willFocus', async () => {
  //     this.callServiceFunc();
  //   });
  // }
  //
  // callServiceFunc = async () => {
  //   await Service.feed()
  //     .then(async (response) => {
  //       if (response.responseCode === 2000) {
  //         this.setState({
  //           feed: response.postList
  //         })
  //
  //       } else {
  //         ToastAndroid.show(response.responseMsg, ToastAndroid.SHORT);
  //       }
  //     });
  // };
  //
  // changeImageHandler = async () => {
  //   this.props.navigation.navigate({ routeName: 'PhotoUploadScreen' });
  // };
  //
  // logoutHandler = () => {
  //   this.props.navigation.navigate({ routeName: 'SignInScreen' });
  //   AsyncStorage.clear();
  // }
  //
  // callHandler = (isfollow) => {
  //   if (isfollow) {
  //     this.callServiceFunc();
  //   }
  // }

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={{ width: "100%", height: "100%", backgroundColor: "#FFFFFF" }}
      >
        <View style={{ paddingLeft: 30, paddingRight: 30, height: "100%", marginTop: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30}} resizeMode="cover"
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

          <View style={{ marginTop: 30 }}>
            <View>
              <Text style={{ textAlign: "center", fontSize: 14 }}>
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
                Follow people to start seeing the photos and videosFollow people to start seeing the photos and videosFollow people to start seeing the photos and videos
              </Text>
            </View>
            <View>
              <Text style={{ textAlign: "center", fontSize: 14 }}>Follow people to start seeing the photos and videos
                they share</Text>
            </View>
          </View>



        </View>


      </ScrollView>
    );
  }
}


export default App;
