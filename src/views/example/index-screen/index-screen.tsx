import React from "react"
import { Button, Image, ListView, StyleSheet, Text, View } from "react-native"
import {
  TouchThroughView,
  TouchThroughWrapper,
} from "react-native-touch-through-view"
import { IndexScreenProps } from "./index-screen-orig"

export class IndexScreen extends React.Component<IndexScreenProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.artistInfo}>
          <Button
            title="Play"
            onPress={() => {
              alert("Touched!")
            }}
          />
          <View style={styles.albumImageWrapper}>
            <Image source={require("./album.jpg")} style={styles.albumImage} />
          </View>
        </View>
        <TouchThroughWrapper style={styles.scrollWrapper}>
          <ListView
            style={styles.scroller}
            dataSource={dataSource}
            renderHeader={() => (
              <TouchThroughView style={styles.touchThroughView} />
            )}
            renderRow={rowData => {
              return <Text style={styles.itemRow}>{rowData}</Text>
            }}
          />
        </TouchThroughWrapper>
      </View>
    )
  }
}

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
const rows = []

let i = 0
while (i < 1000) {
  rows.push(`Item ${i}`)
  i++
}

const dataSource = ds.cloneWithRows(rows)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 20,
  },
  button: {
    marginTop: 20,
  },
  albumImage: {
    width: 300,
    height: 300,
  },
  albumImageWrapper: {
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    width: 320,
    height: 320,
    alignSelf: "center",
    backgroundColor: "white",
    shadowColor: "#ccc",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
  },
  artistInfo: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    height: 400,
    zIndex: 0,
  },
  scroller: {
    zIndex: 1,
  },
  scrollWrapper: {
    flex: 1,
  },
  touchThroughView: {
    height: 400,
    flex: 1,
  },
  itemRow: {
    backgroundColor: "#ddd",
    padding: 20,
    borderBottomWidth: 5,
    borderBottomColor: "#000",
  },
})
