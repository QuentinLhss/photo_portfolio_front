import Header from "../../components/Header";
import PhotoList from "@/components/PhotoList";
import fetchPictures from "@/helpers/fetch-Picture";
import Loading from "@/components/Loading";

export default async function PlusPage() {
    const pictures = await fetchPictures();

    return (
        <div>
            <Header showName={false} subtitle={"En voir plus"}/>
            <PhotoList pictures={pictures.data}/>
        </div>


    );
}



