import React from 'react'
import "./ClubMeetings.css"
const ClubMeetings = () => {
    let clubMeetingslist = [
        { "id": "1", "name": "Book Club for Kids", "date": "12.11.21", "location": "Zoom", "book": "Story Book", "image": "https://img.fruugo.com/product/4/53/103424534_max.jpg" },
        { "id": "2", "name": "Quarantini", "date": "18.11.21", "location": "Zoom", "book": "Little Women", "image": "https://images-na.ssl-images-amazon.com/images/I/A1WWhjM1+eL.jpg" },
        { "id": "3", "name": "Book of the Month", "date": "21.11.21", "location": "Google Meet", "book": "A Thousand Nights", "image": "https://senselesscrutiny.files.wordpress.com/2015/07/a-thousand-nights1.jpg" },
        { "id": "4", "name": "Rebel Book Club", "date": "01.12.21", "location": "Google Meet", "book": "A Skinful of Shadows", "image": "https://lh3.googleusercontent.com/proxy/xm7QXp23PIsyYMScdzE9BAolCWyW8ZY23mLuoxTgM7aMFvN3bMMc64335Vw-jy8axCCUe_NxpohYhSmv0S_FX7Q1TJRmKZIHtC8U0iikVgHf34zhWI97JibFqEfCbn2e4mtbp5I2l62xO1pwqinpatUVihUD_f72n6FxDb98Jj6hI4Kln589EuKNhCrKuNDNAf0Zj4Hjn23JlE_AK_8h-8sOTAQQNJ4mzt4" },
    ]
    return (
        <div className="club-meetings">
            <div className="club-header">
                <div id="club-title">Club Meetings</div>
                <img className="club-image" src="https://cdn.dribbble.com/users/1008875/screenshots/15475394/media/293238ee603dd12a59df912ffb94a359.png?compress=1&resize=1200x900" alt="reading book" />
            </div>

            <div className="meetings-box">{
                clubMeetingslist.map(meeting =>
                    <div className="meeting-card" key={meeting.id}>
                        <hr id="meetings-hr"/>
                        <img className="club-meeting-book-img" src={meeting.image} alt="" />
                        <p className="club-meeting-subtitle"> {meeting.book}</p>
                        <p className="club-date">{meeting.date}</p>
                        <p className="club-date">{meeting.location}</p>

                    </div>

                )}</div>
        </div>

    )
}

export default ClubMeetings
