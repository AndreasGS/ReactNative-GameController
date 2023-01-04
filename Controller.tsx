import React, { FC, useState, useEffect, useRef } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type KeyType =
  | "UP"
  | "DOWN"
  | "LEFT"
  | "RIGHT"
  | "B"
  | "A"
  | "START"
  | "SELECT";

const KONAMI_CODE: KeyType[] = [
  "UP",
  "UP",
  "DOWN",
  "DOWN",
  "LEFT",
  "RIGHT",
  "LEFT",
  "RIGHT",
  "B",
  "A",
  "START",
];

function isKonamiCode(code: KeyType[]) {
  return JSON.stringify(code) === JSON.stringify(KONAMI_CODE);
}

export const Controller: FC<{
  showController: boolean;
  successCallback: () => void;
  hideController: () => void;
}> = ({ showController, successCallback, hideController }) => {
  const [code, setCode] = useState<KeyType[]>([]);

  const onControllerPress = (key: KeyType) => {
    if (key === "SELECT") {
      Alert.alert(
        "SELECT MENU",
        "What do you want to do",
        [
          { text: "Try again", onPress: () => setCode([]) },
          { text: "Cancel", onPress: () => {}, style: "cancel" },
          { text: "Close controller", onPress: hideController },
        ],
        { cancelable: false }
      );
    }

    const newCodeArray = [...code];
    newCodeArray.push(key);

    if (isKonamiCode(newCodeArray)) {
      successCallback();
    }

    setCode(newCodeArray);
  };

  useTimeout(() => {
    setCode([]);
  }, 3000 + code.length);

  if (showController) {
    return (
      <Modal transparent={true} animationType="none" onRequestClose={() => {}}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <SafeAreaView
            style={{
              position: "relative",
              width: "80%",
              height: "90%",
              backgroundColor: "#dcdcdc",
              borderRadius: 5,
            }}
          >
            <View
              style={{
                position: "absolute",
                width: "85%",
                height: "96%",
                borderRadius: 5,
                top: "2%",
                right: "2%",
                backgroundColor: "#1a1a1a",
              }}
            >
              <View
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    position: "relative",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      height: "60%",
                      width: "60%",
                      top: "20%",
                      right: "15%",
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        height: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 5,
                          backgroundColor: "#dddddd",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => onControllerPress("A")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 45,
                            backgroundColor: "red",
                          }}
                        />
                        <Text
                          style={{
                            color: "red",
                            transform: [{ rotate: "-90deg" }],
                            fontWeight: "bold",
                            fontSize: 20,
                            position: "absolute",
                            top: -8,
                            left: 70,
                          }}
                        >
                          A
                        </Text>
                      </View>
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 5,
                          backgroundColor: "#dddddd",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => onControllerPress("B")}
                          style={{
                            width: 45,
                            height: 45,
                            borderRadius: 45,
                            backgroundColor: "red",
                          }}
                        />
                        <Text
                          style={{
                            color: "red",
                            transform: [{ rotate: "-90deg" }],
                            fontWeight: "bold",
                            fontSize: 20,
                            position: "absolute",
                            top: -8,
                            left: 70,
                          }}
                        >
                          B
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        position: "absolute",
                        left: -50,
                        bottom: -55,
                        height: "100%",
                      }}
                    >
                      <Text
                        style={{
                          color: "red",
                          transform: [{ rotate: "-90deg" }],
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        React Native
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "13%",
                      backgroundColor: "#808080",
                      borderRadius: 10,
                      borderBottomLeftRadius: 0,
                      borderTopLeftRadius: 0,
                    }}
                  />
                  <View
                    style={{
                      height: "100%",
                      width: "13%",
                      backgroundColor: "#808080",
                      borderRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      height: "100%",
                      width: "13%",
                      backgroundColor: "#808080",
                      borderRadius: 10,
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          height: "50%",
                          width: 70,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            transform: [{ rotate: "-90deg" }],
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "red",
                          }}
                        >
                          START
                        </Text>
                      </View>
                      <View
                        style={{
                          height: "50%",
                          width: 70,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            transform: [{ rotate: "-90deg" }],
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "red",
                          }}
                        >
                          SELECT
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      height: "100%",
                      width: "23%",
                      backgroundColor: "#dddddd",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: "85%",
                        height: "95%",
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: "#1a1a1a",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => onControllerPress("START")}
                        style={{
                          width: "25%",
                          height: "30%",
                          borderRadius: 10,
                          backgroundColor: "#1a1a1a",
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => onControllerPress("SELECT")}
                        style={{
                          width: "25%",
                          height: "30%",
                          borderRadius: 10,
                          backgroundColor: "#1a1a1a",
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      height: "100%",
                      width: "13%",
                      backgroundColor: "#808080",
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      borderTopRightRadius: 0,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    position: "relative",
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      height: "60%",
                      width: "60%",
                      top: "20%",
                      right: "15%",
                    }}
                  >
                    <View
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => onControllerPress("DOWN")}
                        style={{
                          position: "absolute",
                          width: "34%",
                          height: "34%",
                          borderWidth: 3,
                          borderLeftWidth: 0,
                          borderColor: "white",
                          top: "33%",
                          left: "66%",
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => onControllerPress("RIGHT")}
                        style={{
                          position: "absolute",
                          width: "34%",
                          height: "34%",
                          borderWidth: 3,
                          borderBottomWidth: 0,
                          borderColor: "white",
                          top: 0,
                          left: "33%",
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => onControllerPress("UP")}
                        style={{
                          position: "absolute",
                          width: "34%",
                          height: "34%",
                          borderWidth: 3,
                          borderRightWidth: 0,
                          borderColor: "white",
                          top: "33%",
                          left: 0,
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => onControllerPress("LEFT")}
                        style={{
                          position: "absolute",
                          width: "34%",
                          height: "34%",
                          borderWidth: 3,
                          borderTopWidth: 0,
                          borderColor: "white",
                          top: "66%",
                          left: "33%",
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    );
  }

  return null;
};

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback: () => void, delay: number | null): void {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const savedCallback = useRef(() => {});

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
}
