import { useState } from "react";
import { createContext } from "react";
import VideoOverlay from "../Components/VideoOverlay";

export const VideoContext = createContext();

export function VideoProvider({children}){
          const [showVideo, setShowVideo] = useState(false);

          function playVideo(){
            setShowVideo(true);
          }

          return(
            <VideoContext.Provider value={{playVideo}}>
               {children}
               {showVideo && <VideoOverlay onFinish={()=>{setShowVideo(false)}} />}
            </VideoContext.Provider>
          )
}