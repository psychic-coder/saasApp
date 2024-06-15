import Image from 'next/image'
import React from 'react'

const PodcastCard = ({podcastId, imgUrl,title,description}:{
    imgUrl:string,
    title:string,
    description:string,
    podcastId:number
}) => {
  return (
    <div className="cursor-pointer">
        <figure className="flex flex-col gap-2">
            <Image src={imgUrl} width={174} height={174} alt='title' className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"/>
            <div className="flex flex-col">
                <h1 className="text-16 truncate font-bold text-white-1 ">{title}</h1>
                <h2 className="text-12 truncate text-white-4 font-normal capitalize">{description}</h2>
            </div>
        </figure>
        </div>
  )
}

export default PodcastCard