"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  const reloadParentSite = () => {
    // Access the parent window and call the reloadMainSite function
    window.parent.reloadMainSite();
    console.log("hello world");
  };
  return (
    <main className={styles.main}>
      <div>
        <button onClick={reloadParentSite}>Proceed</button>
      </div>
    </main>
  );
}
