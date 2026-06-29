import meme from '../assets/meme.mp4'
export default function VideoOverlay({onFinish}){
          
          return(
           <div className="overlay">
             <video
        autoPlay
        
        onEnded={onFinish}
        className='vid'
      >
        <source src = {meme} type="video/mp4"  />
      </video>
           </div>
          ) 
}