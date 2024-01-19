'use client'
import Link from "next/link";
import { useEffect } from "react";

export default function ColorMode() {
    useEffect(() => {
        document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
    }, []);

    return (
        <div className="colorMode">
            <div href="/" class="button white">
                LIGHT
            </div>
        </div>
    )
}