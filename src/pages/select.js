import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import { ImageDiv, TutorialDiv } from "../components/Tutorial/Tutorial";
import SelectDog from "../components/SelectDog/SelectDog";

export default function SelectPage() {
    return <div>
        <SelectDog />
    </div>
}