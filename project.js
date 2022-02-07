let projects = []

function addProject(event) {
    event.preventDefault()

    let projectName = document.getElementById('input-project-title').value
    let startDate = document.getElementById('input-start-date').value
    let endDate = document.getElementById('input-end-date').value
    let projectDeskrpsi = document.getElementById('input-project-content').value
    let projectTech = document.getElementById('input-project-tech').value
    let image = document.getElementById('input-project-image')

    image = URL.createObjectURL(image.files[0])

    let project = {
        projectName,
        startDate,
        endDate,
        projectDeskrpsi,
        projectTech,
        image,
        postedAt: new Date()
    }

    projects.push(project)

    renderProject()
}

function renderProject() {
    let lengthData = projects.length

    let projectContainer = document.getElementById('contents')

    projectContainer.innerHTML = firstProjectContent()

    let i = 0
    for (i; i < lengthData; i++) {
        projectContainer.innerHTML += `
        <div class="container">
            <div class="project-list-item">
                <div class="img">
                    <img src="${projects[i].image}" alt="">
                </div>
                <div class="header">
                    <h3>${projects[i].projectName}</h3>
                    <p>${getDistanceDate(projects[i].postedAt)}</p>
                </div>
                <div class="conten">
                    <p>${projects[i].projectDeskrpsi}</p>
                </div>
                <div class="skill_img">
                    <a href="#"><img src="assets/facebook.png" alt=""></a> 
                    <a href="#"><img src="assets/twitter.png" alt=""></a>
                    <a href="#"><img src="assets/instagram.png" alt=""></a>
                </div>
                <div class="btn">
                    <div class="btn_skill1">
                        <a href="">edit</a>
                    </div>
                    <div class="btn_skill2">
                        <a href="">delet</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

function getDistanceDate() {
    // End Project  - Start Project
    const distance = new Date(projects[0].endDate) - new Date(projects[0].startDate)
    
    // Convert to day
    const miliseconds = 1000
    const secondInMinute = 60
    const minutesInHour = 60
    const secondsInHour = secondInMinute * minutesInHour
    const hoursInDay = 23
    
    let dayDistance= distance / (miliseconds * secondsInHour * hoursInDay)
    // if (dayDistance >= 1) {
      return Math.floor(dayDistance) + ' day'
    // }else {
    //   // convert to hour
    //   let hourDistance = Math.floor(distance / (miliseconds * secondsInHour))
  
    //   if (hourDistance > 0) {
    //     return hourDistance + ' hour ago'
    //   }else {
    //     // convert to minutes
    //     const minuteDistance = Math.floor(distance / (miliseconds * secondInMinute))
    //     return minuteDistance + ' minute ago'
    //   }
    // }
  
    console.log(dayDistance)
  }

function firstProjectContent() {
    return `
      <h1>My Project</h1>
        <div class="container">
            <div class="project-list-item">
                <div class="img">
                    <a href="project-detail.html"><img src="assets/gambar1.jpg" alt=""></a>
                </div>
                <div class="header">
                    <a href="project-detail.html">
                      <h3>Dumbways Mobile App - 2021</h3>
                    </a>
                      <p>Durasi: 3 Bulan</p>
                </div>
                <div class="conten">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae expedita sit, porro modi, aliquam natus quis blanditiis laudantium eos perferendis earum vel deserunt omnis. Iusto numquam commodi obcaecati aliquam.</p>
                </div>
                <div class="skill_img">
                    <a href="#"><img src="assets/facebook.png" alt=""></a> 
                    <a href="#"><img src="assets/twitter.png" alt=""></a>
                    <a href="#"><img src="assets/instagram.png" alt=""></a>
                </div>
                <div class="btn">
                    <div class="btn_skill1">
                        <a href="">edit</a>
                    </div>
                    <div class="btn_skill2">
                        <a href="">delet</a>
                    </div>
                </div>
            </div>

            <div class="project-list-item">
                <div class="img">
                    <img src="assets/gambar2.jpg" alt="">
                </div>
                <div class="header">
                    <h3>Dumbways Mobile App - 2021</h3>
                    <p>Durasi: 3 Bulan</p>
                </div>
                <div class="conten">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae expedita sit, porro modi, aliquam natus quis blanditiis laudantium eos perferendis earum vel deserunt omnis. Iusto numquam commodi obcaecati aliquam.</p>
                </div>
                <div class="skill_img">
                    <a href="#"><img src="assets/facebook.png" alt=""></a> 
                    <a href="#"><img src="assets/twitter.png" alt=""></a>
                    <a href="#"><img src="assets/instagram.png" alt=""></a>
                </div>
                <div class="btn">
                    <div class="btn_skill1">
                        <a href="">edit</a>
                    </div>
                    <div class="btn_skill2">
                        <a href="">delet</a>
                    </div>
                </div>
            </div>

            <div class="project-list-item">
                <div class="img">
                    <img src="assets/gambar3.jpg" alt="">
                </div>
                <div class="header">
                    <h3>Dumbways Mobile App - 2021</h3>
                    <p>Durasi: 3 Bulan</p>
                </div>
                <div class="conten">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae expedita sit, porro modi, aliquam natus quis blanditiis laudantium eos perferendis earum vel deserunt omnis. Iusto numquam commodi obcaecati aliquam.</p>
                </div>
                <div class="skill_img">
                    <a href="#"><img src="assets/facebook.png" alt=""></a> 
                    <a href="#"><img src="assets/twitter.png" alt=""></a>
                    <a href="#"><img src="assets/instagram.png" alt=""></a>
                </div>
                <div class="btn">
                    <div class="btn_skill1">
                        <a href="">edit</a>
                    </div>
                    <div class="btn_skill2">
                        <a href="">delet</a>
                    </div>
                </div>
            </div>

            <div class="project-list-item">
                <div class="img">
                    <img src="assets/gambar4.jpg" alt="">
                </div>
                <div class="header">
                    <h3>Dumbways Mobile App - 2021</h3>
                    <p>Durasi: 3 Bulan</p>
                </div>
                <div class="conten">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae expedita sit, porro modi, aliquam natus quis blanditiis laudantium eos perferendis earum vel deserunt omnis. Iusto numquam commodi obcaecati aliquam.</p>
                </div>
                <div class="skill_img">
                    <a href="#"><img src="assets/facebook.png" alt=""></a> 
                    <a href="#"><img src="assets/twitter.png" alt=""></a>
                    <a href="#"><img src="assets/instagram.png" alt=""></a>
                </div>
                <div class="btn">
                    <div class="btn_skill1">
                        <a href="">edit</a>
                    </div>
                    <div class="btn_skill2">
                        <a href="">delet</a>
                    </div>
                </div>
            </div>

            <div class="project-list-item">
                <div class="img">
                    <img src="assets/gambar1.jpg" alt="">
                </div>
                <div class="header">
                    <h3>Dumbways Mobile App - 2021</h3>
                    <p>Durasi: 3 Bulan</p>
                </div>
                <div class="conten">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae expedita sit, porro modi, aliquam natus quis blanditiis laudantium eos perferendis earum vel deserunt omnis. Iusto numquam commodi obcaecati aliquam.</p>
                </div>
                <div class="skill_img">
                    <a href="#"><img src="assets/facebook.png" alt=""></a> 
                    <a href="#"><img src="assets/twitter.png" alt=""></a>
                    <a href="#"><img src="assets/instagram.png" alt=""></a>
                </div>
                <div class="btn">
                    <div class="btn_skill1">
                        <a href="">edit</a>
                    </div>
                    <div class="btn_skill2">
                        <a href="">delet</a>
                    </div>
                </div>
            </div>
        </div>
    `
}