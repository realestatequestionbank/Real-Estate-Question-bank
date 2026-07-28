async function main() {
    try {
        const url = "https://driving-tests.org/texas/texas-cdl-handbook/";
        const res = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });
        console.log("Status:", res.status);
        const text = await res.text();
        
        // Let's find any .pdf links in the HTML
        const pdfRegex = /"([^"]+\.pdf)"/g;
        let match;
        const pdfLinks = [];
        while ((match = pdfRegex.exec(text)) !== null) {
            pdfLinks.push(match[1]);
        }
        
        console.log("Found PDF Links:", pdfLinks);
    } catch (err) {
        console.error("Error:", err);
    }
}
main();
