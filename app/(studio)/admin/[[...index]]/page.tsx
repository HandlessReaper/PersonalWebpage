"use client"; //nicht auf server rendern

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";


export default function AdminPage() {
    return <NextStudio config={config} />
}