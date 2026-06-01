interface ImageProps {
    src?: string
    alt?: string
}

function ImageView(props: ImageProps) {
    return(
        <img 
            src={props.src} 
            alt={props.alt ?? "imagem"} 
            width="100%"
            className="w-100% h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
    )
}

export default ImageView