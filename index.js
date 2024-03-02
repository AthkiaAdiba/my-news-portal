
let selectedCategory = 1;


const buttonByCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
    const allButtonInfo = data.data.news_category;
    // console.log(allButtonInfo)


    const buttonContainer = document.getElementById('category-bar-container');
    allButtonInfo.forEach(buttonInfo => {
        // console.log(buttonInfo)

        const newButton = document.createElement('button');
        newButton.classList = `bg-[#515151] border-none text-white p-3 rounded-md`;
        newButton.innerText = buttonInfo.category_name;
        newButton.addEventListener('click', () => showCardByCategoryId(buttonInfo.category_id))
        buttonContainer.appendChild(newButton);

    })
}


const showCardByCategoryId = async(categoryId) => {
    console.log(categoryId);
    selectedCategory = categoryId;
    const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const data = await res.json()
    const allCard = data.data;
    console.log(allCard);


    const cardContainer = document.getElementById('news-container');

    cardContainer.innerHTML = ''
    allCard.forEach(card => {
        console.log(card)

        
        const newsCard = document.createElement('div');
        newsCard.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl p-3 pr-5">
      <figure><img class="h-full w-[244px]" src="${card.
        thumbnail_url}"
          alt="Movie" /></figure>
      <div class="card-body">
        <div class="flex justify-between items-center">
          <h2 class="card-title text-[#121221] text-2xl font-bold">The best fashion influencers to follow for sartorial inspiration</h2>
          <div class="flex items-center gap-3">
            <p class="text-[#121221] text-lg font-bold">${card.rating.number}</p>
            <p class="text-[#121221] text-lg font-bold">${card.rating.badge}</p>
          </div>
        </div>
        <p>There’s no better time than now to familiarise yourself with the best online vintage clothing stores. If you
          want to <br> overhaul your wardrobe for the long run, mixing vintage with high street clothing is the key to
          being trendy as well as sustainable.
          <br>
          <br>
          But vintage shopping isn’t easy, you can easily spend hours in a store and walk out with...
        </p>
        <!-- profile div -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src="${card.author.img}" />
              </div>
            </div>
            <div>
              <p class="text-[#2B2C34] text-base">${card.author.name}</p>
              <p class="text-[#718797]">${card.author.published_date}</p>
            </div>
          </div>
          <div class="flex items-center">
            <i class="fa-regular fa-eye"></i>
            <p class="text-[#515151] text-lg font-bold"><span>1.5</span>M</p>
          </div>
          <div class="rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#515151]" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#515151]" checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#515151]" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#515151]" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#515151]" />
          </div>
        </div>
        <div class="card-actions justify-end">
          <button class="bg-[#515151] border-none text-white p-4">Details</button>
        </div>
      </div>
    </div>
        `;
        cardContainer.appendChild(newsCard);
    })
}

showCardByCategoryId(selectedCategory);

buttonByCategory();