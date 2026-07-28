async function main() {
    try {
        const url = "https://driving-tests.org/cdl-handbook/";
        const res = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });
        console.log("Status:", res.status);
        const text = await res.text();
        
        // Find links using regex
        const hrefRegex = /href="([^"]+)"/g;
        let match;
        const links = [];
        while ((match = hrefRegex.exec(text)) !== null) {
            const href = match[1];
            if (href.includes("/cdl-handbook") || href.includes("-cdl-") || href.includes("/cdl/")) {
                links.push(href);
            }
        }
        
        console.log(`Found ${links.length} matching links. Sample:`);
        console.log(links.slice(0, 30));
    } catch (err) {
        console.error("Error:", err);
    }
}
main();
