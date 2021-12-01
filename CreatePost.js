import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreatePost extends Component {
    render() {
        if (!this.state.fontsLoaded) {
          return <AppLoading />;
        } else {
          return (
            <View style={styles.container}>
              <View style ={styles.cardContainer}>
                <Image
                source={require("../assets/profile_img.png")}
                style={styles.storyImage}
                ></Image>
    
                <View style={styles.authorNameContainer}>
                  <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                    {this.props.story.title}
                  </View>
                  <Text style={styles.storyAuthorText}>
                    {this.props.story.author}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {this.props.story.description}
                  </Text>
                </View>
                <View style={styles.actionContainer}>
                  <View style={styles.likeButton}>
                    <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                    <Text style={styles.likeText}>12k</Text>
                  </View>
                </View>
              </View>
            
          );
        }
      }
    }
    //Got confused on this part.