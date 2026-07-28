async function main() {
    try {
        const url = "https://driving-tests.org/alabama/al-cdl-handbook/";
        const res = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });
        console.log("Status:", res.status);
        const text = await res.text();
        
        // Find links ending in .pdf
        const pdfRegex = /href="([^"]+\.pdf)"/g;
        let match;
        const pdfs = [];
        while ((match = pdfRegex.exec(text)) !== null) {
            pdfs.push(match[1]);
        }
        
        console.log("Found PDF Links:");
        console.log(pdfs);
        
        // Sometimes it's inside iframe or some other element
        const iframeRegex = /src="([^"]+\.pdf[^"]*)"/g;
        while ((match = iframeRegex.exec(text)) !== null) {
            console.log("Found iframe PDF src:", match[1]);
        }
    } catch (err) {
        console.error("Error:", err);
    }
}
main();
