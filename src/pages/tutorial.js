import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import { ImageDiv, TutorialDiv } from "../components/Tutorial/Tutorial";

export default function TutorialPage() {
    return <div>
        <ImageDiv />
        <TutorialDiv />
    </div>
}