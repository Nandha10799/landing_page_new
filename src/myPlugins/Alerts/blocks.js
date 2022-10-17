/* eslint-disable import/no-anonymous-default-export */

export default function (editor, opts) {
  const bm = editor.BlockManager;
  const { category, blocks } = opts;

  const toAdd = (name) => blocks.indexOf(name) >= 0;

  const commonBlockProps = {
    category,
    select: true,
  };
  toAdd("Success Pop") &&
    bm.add("Success Pop", {
      ...commonBlockProps,
      label: opts.style0,
      media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-three-dots" viewBox="-4 -5 24 24">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>`,
      content: `
      
      <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-center w-12 bg-emerald-500">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
    </div>

    <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
            <span class="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">Your account was registered!</p>
        </div>
    </div>
</div>

`,
    });

  toAdd("Info Pop") &&
    bm.add("Info Pop", {
      ...commonBlockProps,
      label: opts.style1,
      media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-usb" viewBox="-4 -5 24 24">
      <path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H2.25Z"/>
      <path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-5ZM1 10h14V6H1v4Z"/>
    </svg>`,
      content: `
      <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="flex items-center justify-center w-12 bg-blue-500">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
          </svg>
      </div>
  
      <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
              <span class="font-semibold text-blue-500 dark:text-blue-400">Info</span>
              <p class="text-sm text-gray-600 dark:text-gray-200">This channel archived by the owner!</p>
          </div>
      </div>
  </div>
      `,
    });

  toAdd("Warning Pop") &&
    bm.add("Warning Pop", {
      ...commonBlockProps,
      label: opts.style2,
      media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-usb" viewBox="-4 -5 24 24">
      <path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H2.25Z"/>
      <path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-5ZM1 10h14V6H1v4Z"/>
    </svg>`,
      content: `
      <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-center w-12 bg-yellow-400">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
        </svg>
    </div>

    <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
            <span class="font-semibold text-yellow-400 dark:text-yellow-300">Warning</span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
                Your image size is too large!
            </p>
        </div>
    </div>
</div>
      `,
    });

  toAdd("Error Pop") &&
    bm.add("Error Pop", {
      ...commonBlockProps,
      label: opts.style3,
      media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-usb" viewBox="-4 -5 24 24">
      <path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H2.25Z"/>
      <path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-5ZM1 10h14V6H1v4Z"/>
    </svg>`,
      content: `
      <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="flex items-center justify-center w-12 bg-red-500">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
          </svg>
      </div>
  
      <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
              <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
              <p class="text-sm text-gray-600 dark:text-gray-200">
                  Your email is already used!
              </p>
          </div>
      </div>
  </div>
      `,
    });

  toAdd("Notification Pop") &&
    bm.add("Notification Pop", {
      ...commonBlockProps,
      label: opts.style4,
      media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-usb" viewBox="-4 -5 24 24">
      <path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H2.25Z"/>
      <path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-5ZM1 10h14V6H1v4Z"/>
    </svg>`,
      content: `
      <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="w-2 bg-gray-800 dark:bg-gray-900"></div>
  
      <div class="flex items-center px-2 py-3">
          <img class="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200">
  
          <div class="mx-3">
              <p class="text-gray-600 dark:text-gray-200">Sara has replied on the <a class="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline">uploaded image</a>.</p>
          </div>
      </div>
  </div>
      `,
    });

  toAdd("Success Full Width ") &&
    bm.add("Success Full Width ", {
      ...commonBlockProps,
      label: opts.style5,
      media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-usb" viewBox="-4 -5 24 24">
      <path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H2.25Z"/>
      <path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-5ZM1 10h14V6H1v4Z"/>
    </svg>`,
      content: `
      <div class="w-full text-white bg-emerald-500">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
        <div class="flex">
            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                </path>
            </svg>

            <p class="mx-3">You finished the tasks.</p>
        </div>

        <button class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</div>
      `,
    });

  toAdd("Info Full Width") &&
    bm.add("Info Full Width", {
      ...commonBlockProps,
      label: opts.style6,
      media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-usb" viewBox="-4 -5 24 24">
      <path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H2.25Z"/>
      <path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-5ZM1 10h14V6H1v4Z"/>
    </svg>`,
      content: `
      <div class="w-full text-white bg-blue-500">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
        <div class="flex">
            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                </path>
            </svg>

            <p class="mx-3">Update your avatar.</p>
        </div>

        <button class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</div>
      `,
    });

  toAdd("Warning Full Width") &&
    bm.add("Warning Full Width", {
      ...commonBlockProps,
      label: opts.style7,
      media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-usb" viewBox="-4 -5 24 24">
      <path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H2.25Z"/>
      <path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-5ZM1 10h14V6H1v4Z"/>
    </svg>`,
      content: `
      <div class="w-full text-white bg-yellow-400">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto">
        <div class="flex">
            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                </path>
            </svg>

            <p class="mx-3">This version is not supported.</p>
        </div>

        <button class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</div>
      `,
    });

  toAdd("Error Full Width") &&
    bm.add("Error Full Width", {
      ...commonBlockProps,
      label: opts.style8,
      media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-usb" viewBox="-4 -5 24 24">
      <path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H2.25Z"/>
      <path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-5ZM1 10h14V6H1v4Z"/>
    </svg>`,
      content: `
      <div class="w-full text-white bg-red-500">
      <div class="container flex items-center justify-between px-6 py-4 mx-auto">
          <div class="flex">
              <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                  <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z">
                  </path>
              </svg>
  
              <p class="mx-3">Validation Error.</p>
          </div>
  
          <button class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </button>
      </div>
  </div>
      `,
    });
}
