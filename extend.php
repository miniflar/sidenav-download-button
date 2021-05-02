<?php

/*
 * This file is part of miniflar/sidenav-download-button.
 *
 * Copyright (c) miniFLAR.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace MiniFLAR\SideNavDownloadButton;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\Settings\SettingsRepositoryInterface;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    (new Extend\Settings())
        ->serializeToForum(
            'miniflar-sidenav-download-button.button_order',
            'miniflar-sidenav-download-button.button_order',
            'intval',
            0
        ),
    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(function ($serializer, $attributes) {
            $settings = resolve(SettingsRepositoryInterface::class);

            if ($serializer->getActor()->hasPermission('miniflar-sidenav-download-button.viewDownloadButton')) {
                $attributes['miniflar-sidenav-download-button.link'] = $settings->get('miniflar-sidenav-download-button.link');
            }

            return $attributes;
        }),
];
