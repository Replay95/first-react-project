import "./Button.css"

export function Button({ label, test }){
    return ( 
    <button className="landing-button" onClick={test}>
        { label }
    </button>
    );
}


// export-  名前これじゃないとダメ
// default export - 名前を変えてもOK