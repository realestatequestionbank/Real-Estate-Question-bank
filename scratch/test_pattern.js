async function checkUrl(stateCode) {
    const url = `https://files.driving-tests.org/premium/pdf/handbook/CDL/${stateCode}.cdl.en.pdf`;
    try {
        const res = await fetch(url, { method: "HEAD" });
        console.log(`State: ${stateCode.toUpperCase()} -> Status: ${res.status} (${url})`);
        return res.status === 200;
    } catch (err) {
        console.log(`State: ${stateCode.toUpperCase()} -> Error:`, err.message);
        return false;
    }
}

async function main() {
    const states = ["al", "ca", "tx", "fl", "ny", "mi", "oh", "pa", "ga", "nc"];
    for (const code of states) {
        await checkUrl(code);
    }
}
main();
