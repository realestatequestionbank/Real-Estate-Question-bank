import { slugify } from '@/lib/utils'

export interface WarningSign {
    id: string
    title: string
    description: string
    image: string
    slug: string
}

const SIGN_NAMES = [
    "Right Curve",
    "Merging Traffic",
    "School Crossing",
    "Stop Sign Ahead",
    "Yield Ahead",
    "Traffic Signal Ahead",
    "Slippery When Wet",
    "Pedestrian Crossing",
    "Deer Crossing",
    "Two Way Traffic",
    "Hill Ahead",
    "Railroad Crossing",
    "Right Lane Ends",
    "Dip Ahead",
    "Reverse Curve",
    "Added Lane",
    "Divided Highway Begins",
    "Divided Highway Ends",
    "No Passing Zone",
    "Road Work Ahead",
    "Cross Road",
    "Sharp Reverse Curve"
]

const SIGN_DESCRIPTIONS: Record<string, string> = {
    "Right Curve": "This sign warns of a curve to the right ahead. Slow down and prepare to steer safely through the curve to maintain control of your vehicle.",
    "Merging Traffic": "Traffic from another road will be merging into your lane. Be prepared to adjust your speed or change lanes if possible to allow merging traffic to enter safely.",
    "School Crossing": "You are approaching a school zone or school crossing. Watch carefully for children, slow down, and be prepared to stop. Obey all school zone speed limits.",
    "Stop Sign Ahead": "A stop sign is ahead. Start slowing down now so you can come to a complete stop safely at the limit line or intersection.",
    "Yield Ahead": "A yield sign is ahead. Be prepared to slow down or stop to let other traffic proceed before you enter the intersection.",
    "Traffic Signal Ahead": "Traffic signals are ahead. Be prepared to stop if the light is red or turning red. Do not speed up to beat the light.",
    "Slippery When Wet": "The road surface becomes slippery in wet weather or when raining. Slow down and increase your following distance to maintain traction and avoid skidding.",
    "Pedestrian Crossing": "Watch for pedestrians crossing the road. You must yield the right-of-way to any pedestrian in a marked or unmarked crosswalk.",
    "Deer Crossing": "Deer often cross the road in this area. Be alert, especially at dawn and dusk, and scan the road sides. If you see one deer, be on the lookout for others.",
    "Two Way Traffic": "You are leaving a one-way road and entering a two-way road. Stay in your lane and watch for oncoming traffic.",
    "Hill Ahead": "A steep grade or hill is ahead. Check your brakes and be prepared to shift to a lower gear if necessary to control your speed on the decline.",
    "Railroad Crossing": "You are approaching a railroad crossing. Look and listen for trains, and be prepared to stop if lights are flashing, a gate is lowering, or a train is approaching.",
    "Right Lane Ends": "The right lane is ending ahead. Merge left safely before the lane closes. Do not wait until the last moment to merge.",
    "Dip Ahead": "There is a dip or low place in the road ahead. Slow down to avoid losing control, bottoming out your vehicle, or causing discomfort to passengers.",
    "Reverse Curve": "The road curves one way and then the other. Slow down and be prepared for multiple turns. Maintain a steady speed through the curves.",
    "Added Lane": "Traffic from another road will be entering the highway in a new lane. Merging is not required, but watch for entering vehicles and avoid changing lanes into the new lane immediately.",
    "Divided Highway Begins": "The road ahead is divided by a median or barrier. Keep to the right of the divider.",
    "Divided Highway Ends": "The divided highway is ending. Determine that you are on a two-way road and watch for oncoming traffic causing a head-on collision hazard.",
    "No Passing Zone": "This sign marks the beginning of a no-passing zone. You may not pass cars ahead of you in your lane until you see a sign indicating the end of the no-passing zone or the pavement markings change.",
    "Road Work Ahead": "Road work is taking place ahead. Slow down, watch for workers and equipment, and follow signs or flaggers. Fines may be doubled in construction zones.",
    "Cross Road": "Another road crosses the highway ahead. Look left, right, and left again for cross traffic. Be prepared to yield or stop if necessary.",
    "Sharp Reverse Curve": "The road curves sharply one way and then the other. Reduce speed significantly to negotiate the turns safely and stay in your lane."
}

// Helper to generate signs
const generateSigns = (): WarningSign[] => {
    const signs: WarningSign[] = []
    const totalSigns = 60
    const existingImages = 22

    for (let i = 1; i <= totalSigns; i++) {
        const imageIndex = ((i - 1) % existingImages) + 1
        const nameIndex = (i - 1) % SIGN_NAMES.length

        const imageStr = imageIndex.toString().padStart(3, '0')
        const title = SIGN_NAMES[nameIndex]
        const description = SIGN_DESCRIPTIONS[title] || `This ${title} sign alerts you to potential hazards or road conditions ahead. Be prepared to adjust your speed and driving behavior accordingly.`

        const isRepeat = i > existingImages
        const uniqueTitle = isRepeat ? `${title} ${Math.ceil(i / existingImages)}` : title
        const slug = slugify(uniqueTitle)

        signs.push({
            id: `warning-sign-${i}`,
            title: title,
            description: description,
            image: `/images/warning-sign-images/${imageStr}.webp`,
            slug: isRepeat ? `${slug}-${i}` : slug
        })
    }
    return signs
}

export const CALIFORNIA_WARNING_SIGNS: WarningSign[] = generateSigns()
