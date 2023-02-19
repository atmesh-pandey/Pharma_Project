import React from 'react';
import Outerheader from '../outerheader/Outerheader';
import Sidebar from '../sidebar/Sidebar';


function Order() {
    return (
        <>
            {/* <Outerheader />
            <Sidebar /> */}
            <div className='ml-[260px] mt-[11px]'>
                <div className='flex'>
                    <p className='text-[#082161] font-medium'>Patients</p>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[8px] ml-[12px]'>
                        <path d="M6.63554 4.5832C6.63554 4.74748 6.56027 4.91175 6.41004 5.037L1.68024 8.97846C1.37937 9.22919 0.891551 9.22919 0.590798 8.97846C0.290046 8.72783 0.290046 8.3214 0.590798 8.07065L4.77599 4.5832L0.590945 1.09572C0.290193 0.844994 0.290193 0.438603 0.590945 0.187997C0.891697 -0.0628534 1.37951 -0.0628534 1.68039 0.187997L6.41018 4.12939C6.56044 4.25471 6.63554 4.41897 6.63554 4.5832Z" fill="#082161" />
                    </svg>
                    <p className='ml-[12px] text-[#666666] font-medium'>order History</p>
                </div>
            </div>
            <div className='relative right-[540px] top-10'>
                <span className="absolute" ><img src='https://lmsimages.sgp1.digitaloceanspaces.com/user_img.png' /></span><span className="absolute ml-[35px]">Mr. John Doe</span>
            </div>


            <div className='relative w-[1000px] h-[500px]  ml-[250px] mt-[100px]'>
                <div className='absolute'>
                    <div className=' w-[950px] h-[30px] ml-[-3px]'>
                        <table className='w-[100%]'>

                            <thead>
                                <tr className='border-t'>

                                    <th>Order No.</th>
                                    <th>Quantity</th>
                                    <th>Orders Date</th>
                                    <th>Amount</th>
                                    <th>presceibed by</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-t'>
                                    <td>#53665845</td>
                                    <td>44</td>
                                    <td>02/05/2022</td>
                                    <td>20</td>
                                    <td className='relative left-[60px]'><p className='absolute bottom-[8px]'>Dr.Jhon doe</p><p className='absolute text-[15px] bottom-[-5px]'>Doctor</p></td>
                                    <td className='relative'><svg width="85" height="21" viewBox="0 0 85 21" fill="none" xmlns="http://www.w3.org/2000/svg" className=' absolute  ml-[10px] bottom-3'>
                                        <rect x="0.5" y="0.5" width="84" height="20" rx="2.5" fill="#09FD88" fill-opacity="0.08" stroke="#00D06C" />
                                        <path d="M20.134 13.224C20.198 13.224 20.254 13.25 20.302 13.302L20.764 13.8C20.412 14.208 19.984 14.526 19.48 14.754C18.98 14.982 18.374 15.096 17.662 15.096C17.046 15.096 16.486 14.99 15.982 14.778C15.478 14.562 15.048 14.262 14.692 13.878C14.336 13.49 14.06 13.026 13.864 12.486C13.668 11.946 13.57 11.352 13.57 10.704C13.57 10.056 13.672 9.462 13.876 8.922C14.08 8.382 14.366 7.918 14.734 7.53C15.106 7.142 15.55 6.842 16.066 6.63C16.582 6.414 17.152 6.306 17.776 6.306C18.388 6.306 18.928 6.404 19.396 6.6C19.864 6.796 20.276 7.062 20.632 7.398L20.248 7.932C20.224 7.972 20.192 8.006 20.152 8.034C20.116 8.058 20.066 8.07 20.002 8.07C19.93 8.07 19.842 8.032 19.738 7.956C19.634 7.876 19.498 7.788 19.33 7.692C19.162 7.596 18.952 7.51 18.7 7.434C18.448 7.354 18.138 7.314 17.77 7.314C17.326 7.314 16.92 7.392 16.552 7.548C16.184 7.7 15.866 7.922 15.598 8.214C15.334 8.506 15.128 8.862 14.98 9.282C14.832 9.702 14.758 10.176 14.758 10.704C14.758 11.24 14.834 11.718 14.986 12.138C15.142 12.558 15.352 12.914 15.616 13.206C15.884 13.494 16.198 13.714 16.558 13.866C16.922 14.018 17.314 14.094 17.734 14.094C17.99 14.094 18.22 14.08 18.424 14.052C18.632 14.02 18.822 13.972 18.994 13.908C19.17 13.844 19.332 13.764 19.48 13.668C19.632 13.568 19.782 13.45 19.93 13.314C19.998 13.254 20.066 13.224 20.134 13.224ZM24.3064 8.826C24.7504 8.826 25.1504 8.9 25.5064 9.048C25.8624 9.196 26.1664 9.406 26.4184 9.678C26.6704 9.95 26.8624 10.28 26.9944 10.668C27.1304 11.052 27.1984 11.482 27.1984 11.958C27.1984 12.438 27.1304 12.87 26.9944 13.254C26.8624 13.638 26.6704 13.966 26.4184 14.238C26.1664 14.51 25.8624 14.72 25.5064 14.868C25.1504 15.012 24.7504 15.084 24.3064 15.084C23.8584 15.084 23.4544 15.012 23.0944 14.868C22.7384 14.72 22.4344 14.51 22.1824 14.238C21.9304 13.966 21.7364 13.638 21.6004 13.254C21.4684 12.87 21.4024 12.438 21.4024 11.958C21.4024 11.482 21.4684 11.052 21.6004 10.668C21.7364 10.28 21.9304 9.95 22.1824 9.678C22.4344 9.406 22.7384 9.196 23.0944 9.048C23.4544 8.9 23.8584 8.826 24.3064 8.826ZM24.3064 14.25C24.9064 14.25 25.3544 14.05 25.6504 13.65C25.9464 13.246 26.0944 12.684 26.0944 11.964C26.0944 11.24 25.9464 10.676 25.6504 10.272C25.3544 9.868 24.9064 9.666 24.3064 9.666C24.0024 9.666 23.7364 9.718 23.5084 9.822C23.2844 9.926 23.0964 10.076 22.9444 10.272C22.7964 10.468 22.6844 10.71 22.6084 10.998C22.5364 11.282 22.5004 11.604 22.5004 11.964C22.5004 12.684 22.6484 13.246 22.9444 13.65C23.2444 14.05 23.6984 14.25 24.3064 14.25ZM28.553 15V8.922H29.195C29.347 8.922 29.441 8.996 29.477 9.144L29.555 9.768C29.779 9.492 30.031 9.266 30.311 9.09C30.591 8.914 30.915 8.826 31.283 8.826C31.691 8.826 32.021 8.94 32.273 9.168C32.529 9.396 32.713 9.704 32.825 10.092C32.913 9.872 33.025 9.682 33.161 9.522C33.301 9.362 33.457 9.23 33.629 9.126C33.801 9.022 33.983 8.946 34.175 8.898C34.371 8.85 34.569 8.826 34.769 8.826C35.089 8.826 35.373 8.878 35.621 8.982C35.873 9.082 36.085 9.23 36.257 9.426C36.433 9.622 36.567 9.864 36.659 10.152C36.751 10.436 36.797 10.762 36.797 11.13V15H35.723V11.13C35.723 10.654 35.619 10.294 35.411 10.05C35.203 9.802 34.903 9.678 34.511 9.678C34.335 9.678 34.167 9.71 34.007 9.774C33.851 9.834 33.713 9.924 33.593 10.044C33.473 10.164 33.377 10.316 33.305 10.5C33.237 10.68 33.203 10.89 33.203 11.13V15H32.129V11.13C32.129 10.642 32.031 10.278 31.835 10.038C31.639 9.798 31.353 9.678 30.977 9.678C30.713 9.678 30.469 9.75 30.245 9.894C30.021 10.034 29.815 10.226 29.627 10.47V15H28.553ZM39.4942 13.536C39.6902 13.8 39.9042 13.986 40.1362 14.094C40.3682 14.202 40.6282 14.256 40.9162 14.256C41.4842 14.256 41.9202 14.054 42.2242 13.65C42.5282 13.246 42.6802 12.67 42.6802 11.922C42.6802 11.526 42.6442 11.186 42.5722 10.902C42.5042 10.618 42.4042 10.386 42.2722 10.206C42.1402 10.022 41.9782 9.888 41.7862 9.804C41.5942 9.72 41.3762 9.678 41.1322 9.678C40.7842 9.678 40.4782 9.758 40.2142 9.918C39.9542 10.078 39.7142 10.304 39.4942 10.596V13.536ZM39.4402 9.864C39.6962 9.548 39.9922 9.294 40.3282 9.102C40.6642 8.91 41.0482 8.814 41.4802 8.814C41.8322 8.814 42.1502 8.882 42.4342 9.018C42.7182 9.15 42.9602 9.348 43.1602 9.612C43.3602 9.872 43.5142 10.196 43.6222 10.584C43.7302 10.972 43.7842 11.418 43.7842 11.922C43.7842 12.37 43.7242 12.788 43.6042 13.176C43.4842 13.56 43.3102 13.894 43.0822 14.178C42.8582 14.458 42.5822 14.68 42.2542 14.844C41.9302 15.004 41.5642 15.084 41.1562 15.084C40.7842 15.084 40.4642 15.022 40.1962 14.898C39.9322 14.77 39.6982 14.594 39.4942 14.37V17.058H38.4202V8.922H39.0622C39.2142 8.922 39.3082 8.996 39.3442 9.144L39.4402 9.864ZM46.2508 6.162V15H45.1828V6.162H46.2508ZM52.0507 11.298C52.0507 11.05 52.0147 10.824 51.9427 10.62C51.8747 10.412 51.7727 10.234 51.6367 10.086C51.5047 9.934 51.3427 9.818 51.1507 9.738C50.9587 9.654 50.7407 9.612 50.4967 9.612C49.9847 9.612 49.5787 9.762 49.2787 10.062C48.9827 10.358 48.7987 10.77 48.7267 11.298H52.0507ZM52.9147 14.148C52.7827 14.308 52.6247 14.448 52.4407 14.568C52.2567 14.684 52.0587 14.78 51.8467 14.856C51.6387 14.932 51.4227 14.988 51.1987 15.024C50.9747 15.064 50.7527 15.084 50.5327 15.084C50.1127 15.084 49.7247 15.014 49.3687 14.874C49.0167 14.73 48.7107 14.522 48.4507 14.25C48.1947 13.974 47.9947 13.634 47.8507 13.23C47.7067 12.826 47.6347 12.362 47.6347 11.838C47.6347 11.414 47.6987 11.018 47.8267 10.65C47.9587 10.282 48.1467 9.964 48.3907 9.696C48.6347 9.424 48.9327 9.212 49.2847 9.06C49.6367 8.904 50.0327 8.826 50.4727 8.826C50.8367 8.826 51.1727 8.888 51.4807 9.012C51.7927 9.132 52.0607 9.308 52.2847 9.54C52.5127 9.768 52.6907 10.052 52.8187 10.392C52.9467 10.728 53.0107 11.112 53.0107 11.544C53.0107 11.712 52.9927 11.824 52.9567 11.88C52.9207 11.936 52.8527 11.964 52.7527 11.964H48.6907C48.7027 12.348 48.7547 12.682 48.8467 12.966C48.9427 13.25 49.0747 13.488 49.2427 13.68C49.4107 13.868 49.6107 14.01 49.8427 14.106C50.0747 14.198 50.3347 14.244 50.6227 14.244C50.8907 14.244 51.1207 14.214 51.3127 14.154C51.5087 14.09 51.6767 14.022 51.8167 13.95C51.9567 13.878 52.0727 13.812 52.1647 13.752C52.2607 13.688 52.3427 13.656 52.4107 13.656C52.4987 13.656 52.5667 13.69 52.6147 13.758L52.9147 14.148ZM56.1417 15.096C55.6617 15.096 55.2917 14.962 55.0317 14.694C54.7757 14.426 54.6477 14.04 54.6477 13.536V9.816H53.9157C53.8517 9.816 53.7977 9.798 53.7537 9.762C53.7097 9.722 53.6877 9.662 53.6877 9.582V9.156L54.6837 9.03L54.9297 7.152C54.9417 7.092 54.9677 7.044 55.0077 7.008C55.0517 6.968 55.1077 6.948 55.1757 6.948H55.7157V9.042H57.4737V9.816H55.7157V13.464C55.7157 13.72 55.7777 13.91 55.9017 14.034C56.0257 14.158 56.1857 14.22 56.3817 14.22C56.4937 14.22 56.5897 14.206 56.6697 14.178C56.7537 14.146 56.8257 14.112 56.8857 14.076C56.9457 14.04 56.9957 14.008 57.0357 13.98C57.0797 13.948 57.1177 13.932 57.1497 13.932C57.2057 13.932 57.2557 13.966 57.2997 14.034L57.6117 14.544C57.4277 14.716 57.2057 14.852 56.9457 14.952C56.6857 15.048 56.4177 15.096 56.1417 15.096ZM62.6093 11.298C62.6093 11.05 62.5733 10.824 62.5013 10.62C62.4333 10.412 62.3313 10.234 62.1953 10.086C62.0633 9.934 61.9013 9.818 61.7093 9.738C61.5173 9.654 61.2993 9.612 61.0553 9.612C60.5433 9.612 60.1373 9.762 59.8373 10.062C59.5413 10.358 59.3573 10.77 59.2853 11.298H62.6093ZM63.4733 14.148C63.3413 14.308 63.1833 14.448 62.9993 14.568C62.8153 14.684 62.6173 14.78 62.4053 14.856C62.1973 14.932 61.9813 14.988 61.7573 15.024C61.5333 15.064 61.3113 15.084 61.0913 15.084C60.6713 15.084 60.2833 15.014 59.9273 14.874C59.5753 14.73 59.2693 14.522 59.0093 14.25C58.7533 13.974 58.5533 13.634 58.4093 13.23C58.2653 12.826 58.1933 12.362 58.1933 11.838C58.1933 11.414 58.2573 11.018 58.3853 10.65C58.5173 10.282 58.7053 9.964 58.9493 9.696C59.1933 9.424 59.4913 9.212 59.8433 9.06C60.1953 8.904 60.5913 8.826 61.0313 8.826C61.3953 8.826 61.7313 8.888 62.0393 9.012C62.3513 9.132 62.6193 9.308 62.8433 9.54C63.0713 9.768 63.2493 10.052 63.3773 10.392C63.5053 10.728 63.5693 11.112 63.5693 11.544C63.5693 11.712 63.5513 11.824 63.5153 11.88C63.4793 11.936 63.4113 11.964 63.3113 11.964H59.2493C59.2613 12.348 59.3133 12.682 59.4053 12.966C59.5013 13.25 59.6333 13.488 59.8013 13.68C59.9693 13.868 60.1693 14.01 60.4013 14.106C60.6333 14.198 60.8933 14.244 61.1813 14.244C61.4493 14.244 61.6793 14.214 61.8713 14.154C62.0673 14.09 62.2353 14.022 62.3753 13.95C62.5153 13.878 62.6313 13.812 62.7233 13.752C62.8193 13.688 62.9013 13.656 62.9693 13.656C63.0573 13.656 63.1253 13.69 63.1733 13.758L63.4733 14.148ZM68.8412 10.368C68.6412 10.1 68.4252 9.914 68.1932 9.81C67.9612 9.702 67.7012 9.648 67.4132 9.648C66.8492 9.648 66.4152 9.85 66.1112 10.254C65.8072 10.658 65.6552 11.234 65.6552 11.982C65.6552 12.378 65.6892 12.718 65.7572 13.002C65.8252 13.282 65.9252 13.514 66.0572 13.698C66.1892 13.878 66.3512 14.01 66.5432 14.094C66.7352 14.178 66.9532 14.22 67.1972 14.22C67.5492 14.22 67.8552 14.14 68.1152 13.98C68.3792 13.82 68.6212 13.594 68.8412 13.302V10.368ZM69.9092 6.162V15H69.2732C69.1212 15 69.0252 14.926 68.9852 14.778L68.8892 14.04C68.6292 14.352 68.3332 14.604 68.0012 14.796C67.6692 14.988 67.2852 15.084 66.8492 15.084C66.5012 15.084 66.1852 15.018 65.9012 14.886C65.6172 14.75 65.3752 14.552 65.1752 14.292C64.9752 14.032 64.8212 13.708 64.7132 13.32C64.6052 12.932 64.5512 12.486 64.5512 11.982C64.5512 11.534 64.6112 11.118 64.7312 10.734C64.8512 10.346 65.0232 10.01 65.2472 9.726C65.4712 9.442 65.7452 9.22 66.0692 9.06C66.3972 8.896 66.7652 8.814 67.1732 8.814C67.5452 8.814 67.8632 8.878 68.1272 9.006C68.3952 9.13 68.6332 9.304 68.8412 9.528V6.162H69.9092Z" fill="#00D06C" />
                                    </svg>
                                    </td>
                                </tr>
                                <tr className='border-t'>
                                    <td>#53665845</td>
                                    <td>44</td>
                                    <td>02/05/2022</td>
                                    <td>20</td>
                                    <td className='relative left-[60px]'><p className='absolute bottom-[8px] '>Dr.Jhon doe</p><p className='absolute text-[15px] bottom-[-5px] '>Doctor</p></td>
                                    <td className='relative'><svg width="85" height="21" viewBox="0 0 85 21" fill="none" xmlns="http://www.w3.org/2000/svg" className=' absolute  ml-[10px] bottom-3'>
                                        <rect x="0.5" y="0.5" width="84" height="20" rx="2.5" fill="#09FD88" fill-opacity="0.08" stroke="#00D06C" />
                                        <path d="M20.134 13.224C20.198 13.224 20.254 13.25 20.302 13.302L20.764 13.8C20.412 14.208 19.984 14.526 19.48 14.754C18.98 14.982 18.374 15.096 17.662 15.096C17.046 15.096 16.486 14.99 15.982 14.778C15.478 14.562 15.048 14.262 14.692 13.878C14.336 13.49 14.06 13.026 13.864 12.486C13.668 11.946 13.57 11.352 13.57 10.704C13.57 10.056 13.672 9.462 13.876 8.922C14.08 8.382 14.366 7.918 14.734 7.53C15.106 7.142 15.55 6.842 16.066 6.63C16.582 6.414 17.152 6.306 17.776 6.306C18.388 6.306 18.928 6.404 19.396 6.6C19.864 6.796 20.276 7.062 20.632 7.398L20.248 7.932C20.224 7.972 20.192 8.006 20.152 8.034C20.116 8.058 20.066 8.07 20.002 8.07C19.93 8.07 19.842 8.032 19.738 7.956C19.634 7.876 19.498 7.788 19.33 7.692C19.162 7.596 18.952 7.51 18.7 7.434C18.448 7.354 18.138 7.314 17.77 7.314C17.326 7.314 16.92 7.392 16.552 7.548C16.184 7.7 15.866 7.922 15.598 8.214C15.334 8.506 15.128 8.862 14.98 9.282C14.832 9.702 14.758 10.176 14.758 10.704C14.758 11.24 14.834 11.718 14.986 12.138C15.142 12.558 15.352 12.914 15.616 13.206C15.884 13.494 16.198 13.714 16.558 13.866C16.922 14.018 17.314 14.094 17.734 14.094C17.99 14.094 18.22 14.08 18.424 14.052C18.632 14.02 18.822 13.972 18.994 13.908C19.17 13.844 19.332 13.764 19.48 13.668C19.632 13.568 19.782 13.45 19.93 13.314C19.998 13.254 20.066 13.224 20.134 13.224ZM24.3064 8.826C24.7504 8.826 25.1504 8.9 25.5064 9.048C25.8624 9.196 26.1664 9.406 26.4184 9.678C26.6704 9.95 26.8624 10.28 26.9944 10.668C27.1304 11.052 27.1984 11.482 27.1984 11.958C27.1984 12.438 27.1304 12.87 26.9944 13.254C26.8624 13.638 26.6704 13.966 26.4184 14.238C26.1664 14.51 25.8624 14.72 25.5064 14.868C25.1504 15.012 24.7504 15.084 24.3064 15.084C23.8584 15.084 23.4544 15.012 23.0944 14.868C22.7384 14.72 22.4344 14.51 22.1824 14.238C21.9304 13.966 21.7364 13.638 21.6004 13.254C21.4684 12.87 21.4024 12.438 21.4024 11.958C21.4024 11.482 21.4684 11.052 21.6004 10.668C21.7364 10.28 21.9304 9.95 22.1824 9.678C22.4344 9.406 22.7384 9.196 23.0944 9.048C23.4544 8.9 23.8584 8.826 24.3064 8.826ZM24.3064 14.25C24.9064 14.25 25.3544 14.05 25.6504 13.65C25.9464 13.246 26.0944 12.684 26.0944 11.964C26.0944 11.24 25.9464 10.676 25.6504 10.272C25.3544 9.868 24.9064 9.666 24.3064 9.666C24.0024 9.666 23.7364 9.718 23.5084 9.822C23.2844 9.926 23.0964 10.076 22.9444 10.272C22.7964 10.468 22.6844 10.71 22.6084 10.998C22.5364 11.282 22.5004 11.604 22.5004 11.964C22.5004 12.684 22.6484 13.246 22.9444 13.65C23.2444 14.05 23.6984 14.25 24.3064 14.25ZM28.553 15V8.922H29.195C29.347 8.922 29.441 8.996 29.477 9.144L29.555 9.768C29.779 9.492 30.031 9.266 30.311 9.09C30.591 8.914 30.915 8.826 31.283 8.826C31.691 8.826 32.021 8.94 32.273 9.168C32.529 9.396 32.713 9.704 32.825 10.092C32.913 9.872 33.025 9.682 33.161 9.522C33.301 9.362 33.457 9.23 33.629 9.126C33.801 9.022 33.983 8.946 34.175 8.898C34.371 8.85 34.569 8.826 34.769 8.826C35.089 8.826 35.373 8.878 35.621 8.982C35.873 9.082 36.085 9.23 36.257 9.426C36.433 9.622 36.567 9.864 36.659 10.152C36.751 10.436 36.797 10.762 36.797 11.13V15H35.723V11.13C35.723 10.654 35.619 10.294 35.411 10.05C35.203 9.802 34.903 9.678 34.511 9.678C34.335 9.678 34.167 9.71 34.007 9.774C33.851 9.834 33.713 9.924 33.593 10.044C33.473 10.164 33.377 10.316 33.305 10.5C33.237 10.68 33.203 10.89 33.203 11.13V15H32.129V11.13C32.129 10.642 32.031 10.278 31.835 10.038C31.639 9.798 31.353 9.678 30.977 9.678C30.713 9.678 30.469 9.75 30.245 9.894C30.021 10.034 29.815 10.226 29.627 10.47V15H28.553ZM39.4942 13.536C39.6902 13.8 39.9042 13.986 40.1362 14.094C40.3682 14.202 40.6282 14.256 40.9162 14.256C41.4842 14.256 41.9202 14.054 42.2242 13.65C42.5282 13.246 42.6802 12.67 42.6802 11.922C42.6802 11.526 42.6442 11.186 42.5722 10.902C42.5042 10.618 42.4042 10.386 42.2722 10.206C42.1402 10.022 41.9782 9.888 41.7862 9.804C41.5942 9.72 41.3762 9.678 41.1322 9.678C40.7842 9.678 40.4782 9.758 40.2142 9.918C39.9542 10.078 39.7142 10.304 39.4942 10.596V13.536ZM39.4402 9.864C39.6962 9.548 39.9922 9.294 40.3282 9.102C40.6642 8.91 41.0482 8.814 41.4802 8.814C41.8322 8.814 42.1502 8.882 42.4342 9.018C42.7182 9.15 42.9602 9.348 43.1602 9.612C43.3602 9.872 43.5142 10.196 43.6222 10.584C43.7302 10.972 43.7842 11.418 43.7842 11.922C43.7842 12.37 43.7242 12.788 43.6042 13.176C43.4842 13.56 43.3102 13.894 43.0822 14.178C42.8582 14.458 42.5822 14.68 42.2542 14.844C41.9302 15.004 41.5642 15.084 41.1562 15.084C40.7842 15.084 40.4642 15.022 40.1962 14.898C39.9322 14.77 39.6982 14.594 39.4942 14.37V17.058H38.4202V8.922H39.0622C39.2142 8.922 39.3082 8.996 39.3442 9.144L39.4402 9.864ZM46.2508 6.162V15H45.1828V6.162H46.2508ZM52.0507 11.298C52.0507 11.05 52.0147 10.824 51.9427 10.62C51.8747 10.412 51.7727 10.234 51.6367 10.086C51.5047 9.934 51.3427 9.818 51.1507 9.738C50.9587 9.654 50.7407 9.612 50.4967 9.612C49.9847 9.612 49.5787 9.762 49.2787 10.062C48.9827 10.358 48.7987 10.77 48.7267 11.298H52.0507ZM52.9147 14.148C52.7827 14.308 52.6247 14.448 52.4407 14.568C52.2567 14.684 52.0587 14.78 51.8467 14.856C51.6387 14.932 51.4227 14.988 51.1987 15.024C50.9747 15.064 50.7527 15.084 50.5327 15.084C50.1127 15.084 49.7247 15.014 49.3687 14.874C49.0167 14.73 48.7107 14.522 48.4507 14.25C48.1947 13.974 47.9947 13.634 47.8507 13.23C47.7067 12.826 47.6347 12.362 47.6347 11.838C47.6347 11.414 47.6987 11.018 47.8267 10.65C47.9587 10.282 48.1467 9.964 48.3907 9.696C48.6347 9.424 48.9327 9.212 49.2847 9.06C49.6367 8.904 50.0327 8.826 50.4727 8.826C50.8367 8.826 51.1727 8.888 51.4807 9.012C51.7927 9.132 52.0607 9.308 52.2847 9.54C52.5127 9.768 52.6907 10.052 52.8187 10.392C52.9467 10.728 53.0107 11.112 53.0107 11.544C53.0107 11.712 52.9927 11.824 52.9567 11.88C52.9207 11.936 52.8527 11.964 52.7527 11.964H48.6907C48.7027 12.348 48.7547 12.682 48.8467 12.966C48.9427 13.25 49.0747 13.488 49.2427 13.68C49.4107 13.868 49.6107 14.01 49.8427 14.106C50.0747 14.198 50.3347 14.244 50.6227 14.244C50.8907 14.244 51.1207 14.214 51.3127 14.154C51.5087 14.09 51.6767 14.022 51.8167 13.95C51.9567 13.878 52.0727 13.812 52.1647 13.752C52.2607 13.688 52.3427 13.656 52.4107 13.656C52.4987 13.656 52.5667 13.69 52.6147 13.758L52.9147 14.148ZM56.1417 15.096C55.6617 15.096 55.2917 14.962 55.0317 14.694C54.7757 14.426 54.6477 14.04 54.6477 13.536V9.816H53.9157C53.8517 9.816 53.7977 9.798 53.7537 9.762C53.7097 9.722 53.6877 9.662 53.6877 9.582V9.156L54.6837 9.03L54.9297 7.152C54.9417 7.092 54.9677 7.044 55.0077 7.008C55.0517 6.968 55.1077 6.948 55.1757 6.948H55.7157V9.042H57.4737V9.816H55.7157V13.464C55.7157 13.72 55.7777 13.91 55.9017 14.034C56.0257 14.158 56.1857 14.22 56.3817 14.22C56.4937 14.22 56.5897 14.206 56.6697 14.178C56.7537 14.146 56.8257 14.112 56.8857 14.076C56.9457 14.04 56.9957 14.008 57.0357 13.98C57.0797 13.948 57.1177 13.932 57.1497 13.932C57.2057 13.932 57.2557 13.966 57.2997 14.034L57.6117 14.544C57.4277 14.716 57.2057 14.852 56.9457 14.952C56.6857 15.048 56.4177 15.096 56.1417 15.096ZM62.6093 11.298C62.6093 11.05 62.5733 10.824 62.5013 10.62C62.4333 10.412 62.3313 10.234 62.1953 10.086C62.0633 9.934 61.9013 9.818 61.7093 9.738C61.5173 9.654 61.2993 9.612 61.0553 9.612C60.5433 9.612 60.1373 9.762 59.8373 10.062C59.5413 10.358 59.3573 10.77 59.2853 11.298H62.6093ZM63.4733 14.148C63.3413 14.308 63.1833 14.448 62.9993 14.568C62.8153 14.684 62.6173 14.78 62.4053 14.856C62.1973 14.932 61.9813 14.988 61.7573 15.024C61.5333 15.064 61.3113 15.084 61.0913 15.084C60.6713 15.084 60.2833 15.014 59.9273 14.874C59.5753 14.73 59.2693 14.522 59.0093 14.25C58.7533 13.974 58.5533 13.634 58.4093 13.23C58.2653 12.826 58.1933 12.362 58.1933 11.838C58.1933 11.414 58.2573 11.018 58.3853 10.65C58.5173 10.282 58.7053 9.964 58.9493 9.696C59.1933 9.424 59.4913 9.212 59.8433 9.06C60.1953 8.904 60.5913 8.826 61.0313 8.826C61.3953 8.826 61.7313 8.888 62.0393 9.012C62.3513 9.132 62.6193 9.308 62.8433 9.54C63.0713 9.768 63.2493 10.052 63.3773 10.392C63.5053 10.728 63.5693 11.112 63.5693 11.544C63.5693 11.712 63.5513 11.824 63.5153 11.88C63.4793 11.936 63.4113 11.964 63.3113 11.964H59.2493C59.2613 12.348 59.3133 12.682 59.4053 12.966C59.5013 13.25 59.6333 13.488 59.8013 13.68C59.9693 13.868 60.1693 14.01 60.4013 14.106C60.6333 14.198 60.8933 14.244 61.1813 14.244C61.4493 14.244 61.6793 14.214 61.8713 14.154C62.0673 14.09 62.2353 14.022 62.3753 13.95C62.5153 13.878 62.6313 13.812 62.7233 13.752C62.8193 13.688 62.9013 13.656 62.9693 13.656C63.0573 13.656 63.1253 13.69 63.1733 13.758L63.4733 14.148ZM68.8412 10.368C68.6412 10.1 68.4252 9.914 68.1932 9.81C67.9612 9.702 67.7012 9.648 67.4132 9.648C66.8492 9.648 66.4152 9.85 66.1112 10.254C65.8072 10.658 65.6552 11.234 65.6552 11.982C65.6552 12.378 65.6892 12.718 65.7572 13.002C65.8252 13.282 65.9252 13.514 66.0572 13.698C66.1892 13.878 66.3512 14.01 66.5432 14.094C66.7352 14.178 66.9532 14.22 67.1972 14.22C67.5492 14.22 67.8552 14.14 68.1152 13.98C68.3792 13.82 68.6212 13.594 68.8412 13.302V10.368ZM69.9092 6.162V15H69.2732C69.1212 15 69.0252 14.926 68.9852 14.778L68.8892 14.04C68.6292 14.352 68.3332 14.604 68.0012 14.796C67.6692 14.988 67.2852 15.084 66.8492 15.084C66.5012 15.084 66.1852 15.018 65.9012 14.886C65.6172 14.75 65.3752 14.552 65.1752 14.292C64.9752 14.032 64.8212 13.708 64.7132 13.32C64.6052 12.932 64.5512 12.486 64.5512 11.982C64.5512 11.534 64.6112 11.118 64.7312 10.734C64.8512 10.346 65.0232 10.01 65.2472 9.726C65.4712 9.442 65.7452 9.22 66.0692 9.06C66.3972 8.896 66.7652 8.814 67.1732 8.814C67.5452 8.814 67.8632 8.878 68.1272 9.006C68.3952 9.13 68.6332 9.304 68.8412 9.528V6.162H69.9092Z" fill="#00D06C" />
                                    </svg>
                                    </td>
                                </tr>
                                <tr className='border-t'>
                                    <td>#53665845</td>
                                    <td>44</td>
                                    <td>02/05/2022</td>
                                    <td>20</td>
                                    <td className='relative left-[60px]'><p className='absolute bottom-[8px] '>Dr.Jhon doe</p><p className='absolute text-[15px] bottom-[-5px]'>Doctor</p></td>
                                    <td className='relative'><svg width="85" height="21" viewBox="0 0 85 21" fill="none" xmlns="http://www.w3.org/2000/svg" className=' absolute  ml-[10px] bottom-3'>
                                        <rect x="0.5" y="0.5" width="84" height="20" rx="2.5" fill="#09FD88" fill-opacity="0.08" stroke="#00D06C" />
                                        <path d="M20.134 13.224C20.198 13.224 20.254 13.25 20.302 13.302L20.764 13.8C20.412 14.208 19.984 14.526 19.48 14.754C18.98 14.982 18.374 15.096 17.662 15.096C17.046 15.096 16.486 14.99 15.982 14.778C15.478 14.562 15.048 14.262 14.692 13.878C14.336 13.49 14.06 13.026 13.864 12.486C13.668 11.946 13.57 11.352 13.57 10.704C13.57 10.056 13.672 9.462 13.876 8.922C14.08 8.382 14.366 7.918 14.734 7.53C15.106 7.142 15.55 6.842 16.066 6.63C16.582 6.414 17.152 6.306 17.776 6.306C18.388 6.306 18.928 6.404 19.396 6.6C19.864 6.796 20.276 7.062 20.632 7.398L20.248 7.932C20.224 7.972 20.192 8.006 20.152 8.034C20.116 8.058 20.066 8.07 20.002 8.07C19.93 8.07 19.842 8.032 19.738 7.956C19.634 7.876 19.498 7.788 19.33 7.692C19.162 7.596 18.952 7.51 18.7 7.434C18.448 7.354 18.138 7.314 17.77 7.314C17.326 7.314 16.92 7.392 16.552 7.548C16.184 7.7 15.866 7.922 15.598 8.214C15.334 8.506 15.128 8.862 14.98 9.282C14.832 9.702 14.758 10.176 14.758 10.704C14.758 11.24 14.834 11.718 14.986 12.138C15.142 12.558 15.352 12.914 15.616 13.206C15.884 13.494 16.198 13.714 16.558 13.866C16.922 14.018 17.314 14.094 17.734 14.094C17.99 14.094 18.22 14.08 18.424 14.052C18.632 14.02 18.822 13.972 18.994 13.908C19.17 13.844 19.332 13.764 19.48 13.668C19.632 13.568 19.782 13.45 19.93 13.314C19.998 13.254 20.066 13.224 20.134 13.224ZM24.3064 8.826C24.7504 8.826 25.1504 8.9 25.5064 9.048C25.8624 9.196 26.1664 9.406 26.4184 9.678C26.6704 9.95 26.8624 10.28 26.9944 10.668C27.1304 11.052 27.1984 11.482 27.1984 11.958C27.1984 12.438 27.1304 12.87 26.9944 13.254C26.8624 13.638 26.6704 13.966 26.4184 14.238C26.1664 14.51 25.8624 14.72 25.5064 14.868C25.1504 15.012 24.7504 15.084 24.3064 15.084C23.8584 15.084 23.4544 15.012 23.0944 14.868C22.7384 14.72 22.4344 14.51 22.1824 14.238C21.9304 13.966 21.7364 13.638 21.6004 13.254C21.4684 12.87 21.4024 12.438 21.4024 11.958C21.4024 11.482 21.4684 11.052 21.6004 10.668C21.7364 10.28 21.9304 9.95 22.1824 9.678C22.4344 9.406 22.7384 9.196 23.0944 9.048C23.4544 8.9 23.8584 8.826 24.3064 8.826ZM24.3064 14.25C24.9064 14.25 25.3544 14.05 25.6504 13.65C25.9464 13.246 26.0944 12.684 26.0944 11.964C26.0944 11.24 25.9464 10.676 25.6504 10.272C25.3544 9.868 24.9064 9.666 24.3064 9.666C24.0024 9.666 23.7364 9.718 23.5084 9.822C23.2844 9.926 23.0964 10.076 22.9444 10.272C22.7964 10.468 22.6844 10.71 22.6084 10.998C22.5364 11.282 22.5004 11.604 22.5004 11.964C22.5004 12.684 22.6484 13.246 22.9444 13.65C23.2444 14.05 23.6984 14.25 24.3064 14.25ZM28.553 15V8.922H29.195C29.347 8.922 29.441 8.996 29.477 9.144L29.555 9.768C29.779 9.492 30.031 9.266 30.311 9.09C30.591 8.914 30.915 8.826 31.283 8.826C31.691 8.826 32.021 8.94 32.273 9.168C32.529 9.396 32.713 9.704 32.825 10.092C32.913 9.872 33.025 9.682 33.161 9.522C33.301 9.362 33.457 9.23 33.629 9.126C33.801 9.022 33.983 8.946 34.175 8.898C34.371 8.85 34.569 8.826 34.769 8.826C35.089 8.826 35.373 8.878 35.621 8.982C35.873 9.082 36.085 9.23 36.257 9.426C36.433 9.622 36.567 9.864 36.659 10.152C36.751 10.436 36.797 10.762 36.797 11.13V15H35.723V11.13C35.723 10.654 35.619 10.294 35.411 10.05C35.203 9.802 34.903 9.678 34.511 9.678C34.335 9.678 34.167 9.71 34.007 9.774C33.851 9.834 33.713 9.924 33.593 10.044C33.473 10.164 33.377 10.316 33.305 10.5C33.237 10.68 33.203 10.89 33.203 11.13V15H32.129V11.13C32.129 10.642 32.031 10.278 31.835 10.038C31.639 9.798 31.353 9.678 30.977 9.678C30.713 9.678 30.469 9.75 30.245 9.894C30.021 10.034 29.815 10.226 29.627 10.47V15H28.553ZM39.4942 13.536C39.6902 13.8 39.9042 13.986 40.1362 14.094C40.3682 14.202 40.6282 14.256 40.9162 14.256C41.4842 14.256 41.9202 14.054 42.2242 13.65C42.5282 13.246 42.6802 12.67 42.6802 11.922C42.6802 11.526 42.6442 11.186 42.5722 10.902C42.5042 10.618 42.4042 10.386 42.2722 10.206C42.1402 10.022 41.9782 9.888 41.7862 9.804C41.5942 9.72 41.3762 9.678 41.1322 9.678C40.7842 9.678 40.4782 9.758 40.2142 9.918C39.9542 10.078 39.7142 10.304 39.4942 10.596V13.536ZM39.4402 9.864C39.6962 9.548 39.9922 9.294 40.3282 9.102C40.6642 8.91 41.0482 8.814 41.4802 8.814C41.8322 8.814 42.1502 8.882 42.4342 9.018C42.7182 9.15 42.9602 9.348 43.1602 9.612C43.3602 9.872 43.5142 10.196 43.6222 10.584C43.7302 10.972 43.7842 11.418 43.7842 11.922C43.7842 12.37 43.7242 12.788 43.6042 13.176C43.4842 13.56 43.3102 13.894 43.0822 14.178C42.8582 14.458 42.5822 14.68 42.2542 14.844C41.9302 15.004 41.5642 15.084 41.1562 15.084C40.7842 15.084 40.4642 15.022 40.1962 14.898C39.9322 14.77 39.6982 14.594 39.4942 14.37V17.058H38.4202V8.922H39.0622C39.2142 8.922 39.3082 8.996 39.3442 9.144L39.4402 9.864ZM46.2508 6.162V15H45.1828V6.162H46.2508ZM52.0507 11.298C52.0507 11.05 52.0147 10.824 51.9427 10.62C51.8747 10.412 51.7727 10.234 51.6367 10.086C51.5047 9.934 51.3427 9.818 51.1507 9.738C50.9587 9.654 50.7407 9.612 50.4967 9.612C49.9847 9.612 49.5787 9.762 49.2787 10.062C48.9827 10.358 48.7987 10.77 48.7267 11.298H52.0507ZM52.9147 14.148C52.7827 14.308 52.6247 14.448 52.4407 14.568C52.2567 14.684 52.0587 14.78 51.8467 14.856C51.6387 14.932 51.4227 14.988 51.1987 15.024C50.9747 15.064 50.7527 15.084 50.5327 15.084C50.1127 15.084 49.7247 15.014 49.3687 14.874C49.0167 14.73 48.7107 14.522 48.4507 14.25C48.1947 13.974 47.9947 13.634 47.8507 13.23C47.7067 12.826 47.6347 12.362 47.6347 11.838C47.6347 11.414 47.6987 11.018 47.8267 10.65C47.9587 10.282 48.1467 9.964 48.3907 9.696C48.6347 9.424 48.9327 9.212 49.2847 9.06C49.6367 8.904 50.0327 8.826 50.4727 8.826C50.8367 8.826 51.1727 8.888 51.4807 9.012C51.7927 9.132 52.0607 9.308 52.2847 9.54C52.5127 9.768 52.6907 10.052 52.8187 10.392C52.9467 10.728 53.0107 11.112 53.0107 11.544C53.0107 11.712 52.9927 11.824 52.9567 11.88C52.9207 11.936 52.8527 11.964 52.7527 11.964H48.6907C48.7027 12.348 48.7547 12.682 48.8467 12.966C48.9427 13.25 49.0747 13.488 49.2427 13.68C49.4107 13.868 49.6107 14.01 49.8427 14.106C50.0747 14.198 50.3347 14.244 50.6227 14.244C50.8907 14.244 51.1207 14.214 51.3127 14.154C51.5087 14.09 51.6767 14.022 51.8167 13.95C51.9567 13.878 52.0727 13.812 52.1647 13.752C52.2607 13.688 52.3427 13.656 52.4107 13.656C52.4987 13.656 52.5667 13.69 52.6147 13.758L52.9147 14.148ZM56.1417 15.096C55.6617 15.096 55.2917 14.962 55.0317 14.694C54.7757 14.426 54.6477 14.04 54.6477 13.536V9.816H53.9157C53.8517 9.816 53.7977 9.798 53.7537 9.762C53.7097 9.722 53.6877 9.662 53.6877 9.582V9.156L54.6837 9.03L54.9297 7.152C54.9417 7.092 54.9677 7.044 55.0077 7.008C55.0517 6.968 55.1077 6.948 55.1757 6.948H55.7157V9.042H57.4737V9.816H55.7157V13.464C55.7157 13.72 55.7777 13.91 55.9017 14.034C56.0257 14.158 56.1857 14.22 56.3817 14.22C56.4937 14.22 56.5897 14.206 56.6697 14.178C56.7537 14.146 56.8257 14.112 56.8857 14.076C56.9457 14.04 56.9957 14.008 57.0357 13.98C57.0797 13.948 57.1177 13.932 57.1497 13.932C57.2057 13.932 57.2557 13.966 57.2997 14.034L57.6117 14.544C57.4277 14.716 57.2057 14.852 56.9457 14.952C56.6857 15.048 56.4177 15.096 56.1417 15.096ZM62.6093 11.298C62.6093 11.05 62.5733 10.824 62.5013 10.62C62.4333 10.412 62.3313 10.234 62.1953 10.086C62.0633 9.934 61.9013 9.818 61.7093 9.738C61.5173 9.654 61.2993 9.612 61.0553 9.612C60.5433 9.612 60.1373 9.762 59.8373 10.062C59.5413 10.358 59.3573 10.77 59.2853 11.298H62.6093ZM63.4733 14.148C63.3413 14.308 63.1833 14.448 62.9993 14.568C62.8153 14.684 62.6173 14.78 62.4053 14.856C62.1973 14.932 61.9813 14.988 61.7573 15.024C61.5333 15.064 61.3113 15.084 61.0913 15.084C60.6713 15.084 60.2833 15.014 59.9273 14.874C59.5753 14.73 59.2693 14.522 59.0093 14.25C58.7533 13.974 58.5533 13.634 58.4093 13.23C58.2653 12.826 58.1933 12.362 58.1933 11.838C58.1933 11.414 58.2573 11.018 58.3853 10.65C58.5173 10.282 58.7053 9.964 58.9493 9.696C59.1933 9.424 59.4913 9.212 59.8433 9.06C60.1953 8.904 60.5913 8.826 61.0313 8.826C61.3953 8.826 61.7313 8.888 62.0393 9.012C62.3513 9.132 62.6193 9.308 62.8433 9.54C63.0713 9.768 63.2493 10.052 63.3773 10.392C63.5053 10.728 63.5693 11.112 63.5693 11.544C63.5693 11.712 63.5513 11.824 63.5153 11.88C63.4793 11.936 63.4113 11.964 63.3113 11.964H59.2493C59.2613 12.348 59.3133 12.682 59.4053 12.966C59.5013 13.25 59.6333 13.488 59.8013 13.68C59.9693 13.868 60.1693 14.01 60.4013 14.106C60.6333 14.198 60.8933 14.244 61.1813 14.244C61.4493 14.244 61.6793 14.214 61.8713 14.154C62.0673 14.09 62.2353 14.022 62.3753 13.95C62.5153 13.878 62.6313 13.812 62.7233 13.752C62.8193 13.688 62.9013 13.656 62.9693 13.656C63.0573 13.656 63.1253 13.69 63.1733 13.758L63.4733 14.148ZM68.8412 10.368C68.6412 10.1 68.4252 9.914 68.1932 9.81C67.9612 9.702 67.7012 9.648 67.4132 9.648C66.8492 9.648 66.4152 9.85 66.1112 10.254C65.8072 10.658 65.6552 11.234 65.6552 11.982C65.6552 12.378 65.6892 12.718 65.7572 13.002C65.8252 13.282 65.9252 13.514 66.0572 13.698C66.1892 13.878 66.3512 14.01 66.5432 14.094C66.7352 14.178 66.9532 14.22 67.1972 14.22C67.5492 14.22 67.8552 14.14 68.1152 13.98C68.3792 13.82 68.6212 13.594 68.8412 13.302V10.368ZM69.9092 6.162V15H69.2732C69.1212 15 69.0252 14.926 68.9852 14.778L68.8892 14.04C68.6292 14.352 68.3332 14.604 68.0012 14.796C67.6692 14.988 67.2852 15.084 66.8492 15.084C66.5012 15.084 66.1852 15.018 65.9012 14.886C65.6172 14.75 65.3752 14.552 65.1752 14.292C64.9752 14.032 64.8212 13.708 64.7132 13.32C64.6052 12.932 64.5512 12.486 64.5512 11.982C64.5512 11.534 64.6112 11.118 64.7312 10.734C64.8512 10.346 65.0232 10.01 65.2472 9.726C65.4712 9.442 65.7452 9.22 66.0692 9.06C66.3972 8.896 66.7652 8.814 67.1732 8.814C67.5452 8.814 67.8632 8.878 68.1272 9.006C68.3952 9.13 68.6332 9.304 68.8412 9.528V6.162H69.9092Z" fill="#00D06C" />
                                    </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className='absolute'>
                    <button type="button" className='ml-[40px] mt-[180px] bg-[#2D2AAF] w-[100px] rounded-md text-[#ffffff] p-[10px]'>Cancle</button>
                    <button type="button" className='ml-[500px]  bg-[#FFFFFF] w-[100px] rounded-md text-[#666666] p-[10px]'>Previous</button>
                    <button type="button" className=' ml-[10px]  bg-[#082161] w-[50px] rounded-md text-[#ffffff] p-[10px]'>1</button>
                    <button type="button" className=' ml-[10px] bg-[#ffffff] w-[50px] rounded-md text-[#082161] p-[10px]'>2</button>
                    <button type="button" className='ml-[10px]  bg-[#FFFFFF] w-[100px] rounded-md text-[#082161] p-[10px]'>Next</button>
                </div>
            </div>

        </>
    )
}
export default Order;