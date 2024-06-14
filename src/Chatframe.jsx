import React from 'react'

function Chatframe({ TelechatbotId, host, iFrameSrc, configure }) {
    let config= { title:configure.title, introMessage:configure.introMessage,visitorPronoun:configure.visitorPronoun,chatareabgcolor:configure.chatareabgcolor,titlebgcolor:configure.titlebgcolor,titlecolor:configure.titlecolor,placeholderText:configure.placeholderText ,autoResponse:configure.autoResponse} 
    
    let source=iFrameSrc+'?id='+TelechatbotId+'&host='+host+'&config='+encodeURIComponent(JSON.stringify(config));

    return (
        <>
            <iframe src={source}
                width='100%'
                height='100%'
                frameBorder='0' style={{ overflow: "hidden" }} >
            </iframe>
        </>
    )
}

export default Chatframe